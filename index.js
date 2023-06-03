const express  = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyparser = require("body-parser");
const database = require("mysql");
const {application,request,response} = require("express");

// const dbHandler = require("");

const add = express();
add.use(cors());
add.use(fileUpload());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static("public"));

let a = database.createConnection({
    host:"localhost",
    user:"root",
    password:"Jeevarzzz@1119",
    database:"movie_project"
});

a.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("db connected");
    }
});

// register api

add.post('/addusermovie', (request, response) => {
    try {
        console.log(JSON.stringify(request.body));
        let { first_name, last_name, email, phone_number, password,status,effective_from,effective_to,created_by,created_on,modified_by,modified_on} = request.body;
        const id = Math.floor(Math.random() * 1000) + 1;
        if (id != null && first_name != null && last_name != null && email != null && phone_number != null && password != null) {
            let sql = 'insert into user_details (id,first_name,last_name,email,phone_number,password,status,effective_from,effective_to,created_by,created_on,modified_by,modified_on) values(?,?,?,?,?,?,?,current_timestamp(),current_timestamp()+interval 3 year,current_user(),current_timestamp(),?,?)';
            a.query(sql, [id, first_name, last_name, email, phone_number, password,"A",effective_from,effective_to,created_by,created_on,modified_by,modified_on ], (error, result) => {
                if (error) {
                    let s = { "status": "error" };
                    response.send(s);
                    console.log(error);
                } else {
                    let s = { "status": "success" };
                    response.send(s);
                }
            })
        } else {
            let s = { "status": "InvalidData" };
            response.send(s);
        }
    } catch (e) {
        response.send(e);
    }
})

// login api


add.post("/login", (request, response) => {

    const { email, password } = request.body;
    const sql = "SELECT * FROM user_details WHERE email = ? and status='A'";
    a.query(sql, [email], (error, results) => {
        if (error) {
            console.log(error);
            const a = { status: "error" };
            response.send(a);
        } else {
            if (results.length > 0) {
                const user = results[0];
                if (user.password === password) {
                    // Login successful
                    const a = { status: "success", userId: user.id };
                    response.send(a);
                    console.log(a);
                    console.log("Login successful!");
                } else {
                    // Incorrect password
                    const a = { status: "error", message: "Incorrect password" };
                    response.send(a);
                }
            } else {
                // User not found
                const a = { status: "error", message: "User not found" };
                response.send(a);
            }
        }
    });
});

// industryapi

add.get('/industry_details',(request,response) =>{
    console.log(request);
    a.query('select * from industry_details',(error,result) => {
        if(error){
            console.log(error);
        }else{
            response.send(result);
            
        }
        
    })
})

// hollywoodapi

add.get('/hollywood_movies/:industry_name',(request,response) =>{
    console.log(request);
    let {industry_name} = request.params;
    let sql='select * from industry_movies where industry_name = ?';
    a.query(sql,[industry_name],(error,result) => {
        if(error){
            console.log(error);
        }else{
            response.send(result);
            
        }
        
    })
})

// moviedetailsapi

add.get('/movie_details/:movie_name',(request,response) =>{
    console.log(request);
    let {movie_name} = request.params;
    let sql='select * from movie_details where movie_name = ?';
    a.query(sql,[movie_name],(error,result) => {
        if(error){
            console.log(error);
        }else{
            response.send(result);
            
        }
        
    })
})

add.listen(5056, () => {
    console.log('server is running on 5056 port');
})


