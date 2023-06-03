import React from "react";
import './moviedetailspage.css'
import logo from '../landingpage/mainlogo.png'
import { useState,useEffect } from "react";
import Starrating from "../starrating/starrating";
import Starr from "../starrating/starrating";


function Moviedetails(){
    
    const [moviedetails,setMoviedetails] = useState([])
    useEffect(()=>{
       var moviedetailsPageStorage = localStorage.getItem("moviedetails_page")
        fetch('http://localhost:5056/movie_details/'+moviedetailsPageStorage)
        .then(res=>res.json())
        .then(data=>setMoviedetails(data))
        console.log(moviedetails)
    },[])

    const handleScore = (score) => {
        console.log(score);
     }
    return(
        <>
        {/* navbar */}
        
        <div className="navbarmain container-fluid row mr-auto ml-auto pt-3 sticky-top">
            <div className="col-lg-8 col-5 logodiv">
            <img className="col-lg-2 logoimage" src={logo}/>
            </div>
            <div className="col-lg-4 col-7 p-3 text-right buttondiv">
                 <input type="text" placeholder="Search" class="searchbar"/>
            </div>
        </div>
        {/* mainsection */}
        <div className="col-lg-12 row mr-auto ml-auto sidedivsdetails">
            <div className="col-lg-2 sidedivsdetails"></div>

        <div className="col-lg-8 detailspagemaindiv">
        <h1 className="text-center font-weight-bold detailsheading col-lg-12">MOVIE DETAILS</h1>
            {moviedetails.map((value,index)=>(
                <>
                
                <div className="col-lg-10 text-center pt-4 mr-auto ml-auto">
                <div className="embed-responsive embed-responsive-16by9  trailerdiv ">
                <iframe class="embed-responsive-item p-2 rounded" src={value.movie_trailer} allowfullscreen></iframe>
                </div>
                
                

                </div>
                <h2 className="text-white pt-2 text-center">MOVIENAME : {value.movie_name}</h2>
                <h4 className="text-white pt-2 text-center">GENRE : {value.movie_genre}</h4>
                <h1 className="col-lg-12 text-center text-white pt-5">CAST & CREW</h1>

                <div className="col-lg-12 row mr-auto ml-auto justify-content-around pt-5">
                    
                
                    {/* <h2 className="text-white text-center">Cast and Crew</h2> */}
                    <div class="card col-lg-3 firstpagecard">
                    <img src={value.movie_image1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h4 class="card-title text-center">MainActor  {value.actor1}</h4>
                    </div>
                    </div>
                    

                    
                    {/* <h2 className="text-white text-center">Cast and Crew</h2> */}
                    <div class="card col-lg-3 firstpagecard">
                    <img src={value.movie_image2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h4 class="card-title text-center">SideActor  {value.actor2}</h4>
                    </div>
                    </div>
                    

                    
                    {/* <h2 className="text-white text-center">Cast and Crew</h2> */}
                    <div class="card col-lg-3 firstpagecard">
                    <img src={value.movie_image3} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h4 class="card-title text-center">Director  {value.director}</h4>
                    </div>
                    </div>
                    







                    </div>
                    
                
                <div className="paradivdetailspage pt-2">
                
                <h4 className="text-white pt-3 text-center">GIVE RATINGS </h4>
                <h5><Starr handleScore={handleScore}/></h5>
            <h1 className="text-white text-center pt-5">MOVIE DESCRIPTION</h1>
            <p className="text-white text-center pt-4 lastparadetails">{value.movie_story}</p>
        </div>
                </>
                    
            ))}
        </div>
        <div className="col-lg-2 sidedivsdetails"></div>
        </div>

       
        
        </>
    );
}
export default Moviedetails