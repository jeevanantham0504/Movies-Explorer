import React from "react";
import './register.css'
import logo from './mainlogo.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loginpage from "../login/login";

function Registerpage(){
	// const Navigate = useNavigate();
	// const goback=()=>{
	// 	Navigate("/login");
	const navigate = useNavigate();
	const insertUserDetails = async(event)=>{
		event.preventDefault();
		var config = { headers: { "enctype": "multipart/form-data" } };
		var firstName=document.getElementById("textBoxfname").value;
        var lastName=document.getElementById("textBoxlname").value;
		var mailid=document.getElementById("textBoxmail").value;
		var valid=new RegExp(/^([a-z0-9]+)@([a-z]+)\.([a-z]{2,3})/);
		var validemail=mailid.match(valid);
		var mobile=document.getElementById("textBoxphone").value;
		var validmob=new RegExp(/^[6-9][0-9]{9}/);
        var validMobile=mobile.match(validmob);
		var enterPassword=document.getElementById("textBoxpword").value;
        var confirmPassword=document.getElementById("textBoxcpword").value;

		if(firstName==""||firstName==null){
            alert("Please enter Firstname")
        }else if(lastName==""||lastName==null){
            alert("Please enter lastname")
        }else if(mailid==""||mailid==null||validemail==null){
            alert("Please enter a Valid mailID")
        }else if(mobile==""||mobile==null||validMobile==null){
            alert("Please enter a Valid Mobile Number")
        }else if(enterPassword==""||enterPassword==null){
            alert("Please enter a Valid Password")
        }else if(enterPassword==confirmPassword){
			var password = document.getElementById("textBoxpword").value;

			let userInfo = {
                "first_name": firstName,
                "last_name": lastName,
                "email": mailid,
                "phone_number": mobile,
                "password": password
            }
            console.log(userInfo);
            axios.post("http://localhost:5056/addusermovie", userInfo,config)
                .then((res) => {
                    console.log(res);
                  alert("Registered Successfully");
                  navigate("/login");

                
                })
                .catch((error) => {
                    console.log(error);
                })
			}
				else{
					alert("password and confirm password didn't matched. please enter same password");
				}
        
    }  



    
    return(
        <>
		{/* navbar */}
		 <div className="navbarmain container-fluid row mr-auto ml-auto pt-3 sticky-top">
            <div className="col-lg-10 col-5 logodiv">
            <img className="col-lg-2 logoimage" src={logo}/>
            </div>
            <div className="col-lg-2 col-7 p-3 text-right buttondiv">
			<Link to='/login'> <button className="btn btn-success">Login</button></Link>
				 <Link to='/register'><button className="btn btn-primary ml-2">Register</button></Link>
            </div>
        </div>
		{/* form */}
       <div className="loginmaindiv">
		<div className="container  row mr-auto ml-auto loginrowdiv">
			<div className="col-lg-4"></div>
			<div className="col-lg-4 logininputdiv">
			<form onSubmit={insertUserDetails}>
				<h1 className="text-white">Signup</h1>
				<input className="inputfields col-lg-10 mt-5" type="text" id="textBoxfname" placeholder="Enter First Name"/><br/>
				<input className="inputfields col-lg-10 mt-4" type="text" id="textBoxlname" placeholder="Enter Last Name"/><br/>
				<input className="inputfields col-lg-10 mt-4" type="text" id="textBoxmail" placeholder="Enter Mail ID"/><br/>
				<input className="inputfields col-lg-10 mt-4" type="text" id="textBoxphone" placeholder="Enter Phonenumber"/><br/>
				<input className="inputfields col-lg-10 mt-4" type="password" id="textBoxpword" placeholder="Enter Password"/><br/>
				<input className="inputfields col-lg-10 mt-4" type="text" id="textBoxcpword" placeholder="Confirm Password"/><br/>
				<button type="submit" className="registerbutton btn rounded-pill font-weight-bold mt-5 mb-3 col-lg-6">Register</button>
				</form>
				<Link to='/login'><p className="text-white">Already Have an Account Login?</p></Link>
			</div>
			
			<div className="col-lg-4"></div>
		</div>

	   </div>
        </>
    );
	}
	
export default Registerpage