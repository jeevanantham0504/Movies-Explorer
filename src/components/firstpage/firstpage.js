import React, { useEffect, useState } from "react";
import './firstpage.css'
import logo from '../landingpage/mainlogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Firstpage(){

    const Navigate = useNavigate();
    const [industries,setIndustries] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5056/industry_details')
        .then(res=>res.json())
        .then(data=>setIndustries(data))
        console.log(industries)
    },[])
    const gonextpage = (value) => () => {
        console.log(value.industry_name)
        localStorage.setItem('movie_page',value.industry_name)
        Navigate('/moviepage')
    }
    return(
        <>
        {/* navbar */}

        <div className="navbarmain container-fluid row mr-auto ml-auto pt-3 sticky-top">
            <div className="col-lg-8 col-5 logodiv">
            <img className="col-lg-2 logoimage" src={logo}/>
            </div>
            <div className="col-lg-4 col-7 p-3 text-right buttondiv">
            {/* <Link to='/login'> <button className="btn btn-success">Login</button></Link>
				 <Link to='/register'><button className="btn btn-primary ml-2">Register</button></Link> */}
                {/* <div className="searchbar rounded-pill">
                 <input type="text" className="searchinput" placeholder="Search Movies"/>
                 <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />

                 </div> */}
                 <input type="text" placeholder="Search" class="searchbar"/>
            </div>
        </div>

        {/* container */}
        <div className="firstpagemaindiv pt-2">
                <h1 className="maintext font-weight-bold text-center">INDUSTRIES</h1>
                <p className="maintext mainparatext text-center text-white">Select Movies Based on Industries</p>
                <div className="container row mr-auto ml-auto justify-content-around maincardsdivfirstpage">
                 {industries.map((value,index)=>(
                    <>
                     <div class="card col-lg-3 firstpagecard" onClick={gonextpage(value)}>
                    <img src={value.industry_images} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h4 class="card-title">{value.industry_name}</h4>
                    <p class="card-text">{value.industry_description}</p>
                     
                  </div>
        </div>
                    </>
                 ))}
                </div>
        </div>

        </>
    );
}
export default Firstpage