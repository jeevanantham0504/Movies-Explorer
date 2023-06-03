import React from "react";
import './moviepage.css'
import logo from '../landingpage/mainlogo.png'
import { useState,useEffect } from "react";
import Star from 'star-rating-react-component'; 
import { useNavigate } from "react-router-dom";


function Moviepage(){
    const Navigate = useNavigate();
    const [movies,setMovies] = useState([])
    useEffect(()=>{
       var moviePageStorage = localStorage.getItem("movie_page")
        fetch('http://localhost:5056/hollywood_movies/'+moviePageStorage)
        .then(res=>res.json())
        .then(data=>setMovies(data))
        console.log(movies)
    },[])
    const gomoviedetailspage = (value) => () => {
        console.log(value.movie_name)
        localStorage.setItem('moviedetails_page',value.movie_name)
        Navigate('/moviedetailspage')
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
        <div className="moviepagemaindiv">
            <div className="container text-center pt-3">
            <h1 className="movieheading ">MOVIES</h1>
            <p className="text-white movieheading1 mt-3">Click on your favourite movie to see a detailed View</p>
            </div>
        
        <div className="container row mr-auto ml-auto maincardsmoviepage pt-5 pb-5">
                 {movies.map((value,index)=>(
                    <>
                     <div class="card col-lg-3 firstpagecard" onClick={gomoviedetailspage(value)}>
                    <img src={value.movie_image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h4 class="card-title">Movie : {value.movie_name}</h4>
                    <p class="card-text">Duration : {value.movie_length}</p>
                    <p className="card-text">Language :{value.movie_language}</p>
                    <p className="card-text">Rating :{value.movie_rating}</p>
                    </div>
                    </div>
                    </>
                 ))}
                </div>
                </div>


        </>
    );
}
export default Moviepage