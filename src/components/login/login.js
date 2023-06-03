import React from "react";
import './login.css'
import logo from './mainlogo.png'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Loginpage(){
	const navigate = useNavigate();
    const login = (event) => {
        event.preventDefault();
        var config = { headers: { "enctype": "multipart/form-data" } };
        var username = document.getElementById("loginMailbox").value;
        var password = document.getElementById("loginPasswordbox").value;
        if (username == "") {
            alert("please enter Valid Mail ID")
        } else if (password == "") {
            alert("please enter the password")

        } else {
         
            let user_list = {
                "email": username,
                "password": password
            }
            console.log(user_list);

           document.getElementById("loginMailbox").value="";
           document.getElementById("loginPasswordbox").value="";


            axios.post("http://localhost:5056/login", user_list, config)
                .then(function (res) {
                    if (res.data.status == 'error') {
                        alert('User Not Found')
                        
                        console.log(res.data); 
                    } else if (res.data.status == 'success') {
                        alert('Logged in successfully')
						navigate("/firstpage")
                        
                        console.log(res.data);
                       
                    }
                })


        }
    
    }
    return(
        <>
        <div className="navbarmain container-fluid row mr-auto ml-auto pt-3 sticky-top">
            <div className="col-lg-10 col-5 logodiv">
            <img className="col-lg-2 logoimage" src={logo}/>
            </div>
            <div className="col-lg-2 col-7 p-3 text-right buttondiv">
            <Link to='/login'> <button className="btn btn-success">Login</button></Link>
				 <Link to='/register'><button className="btn btn-primary ml-2">Register</button></Link>
            </div>
        </div>
       <div className="loginmaindiv">
		<div className="container  row mr-auto ml-auto loginrowdiv">
			<div className="col-lg-4"></div>
			<div className="col-lg-4 logininputdiv logininputdiv1">
			<form className="loginform">
				<h1 className="text-white">Login</h1>
				<input className="inputfields col-lg-10 mt-5" type="text" id="loginMailbox" placeholder="Enter Mail ID"/><br/>
				<input className="inputfields col-lg-10 mt-4" type="text" id="loginPasswordbox" placeholder="Enter Password"/><br/>
				
				<button type="button" onClick={login} className="registerbutton btn rounded-pill font-weight-bold mt-5 mb-5 col-lg-6">Login</button>
				</form>
			</div>
			<div className="col-lg-4"></div>
		</div>

	   </div>
        </>
    );
}
export default Loginpage