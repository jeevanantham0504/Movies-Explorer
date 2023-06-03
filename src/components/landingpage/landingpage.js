import React from "react";
import './landingpage.css';
import logo from './mainlogo.png'
import carousel1 from './carouselimg1.png'
import carousel2 from './carouselimg2.png'
import carousel3 from './carouselimg3.png'
import carousel4 from './carouselimg4.png'
import card1 from './cardimg1.webp'
import card2 from './cardimg2.jpg'
import card3 from './cardimg3.jfif'
import card4 from './cardimg4.jpg'
import card5 from './cardimg5.jfif'
import { Link } from "react-router-dom";


function Landing(){
    return(
        <>
        {/* navbar */}
        <div className="navbarmain container-fluid row mr-auto ml-auto pt-3 sticky-top">
            <div className="col-lg-10 col-5 logodiv">
            <img className="col-lg-2 logoimage" src={logo}/>
            </div>
            <div className="col-lg-2 col-7 p-3 text-right buttondiv">
            <Link to='/login'> <button className="btn btn-success">Login</button></Link>
                 <Link to='/register'> <button className="btn btn-primary ml-2">Register</button></Link>
            </div>
        </div>

        {/* carousel */}

        <div className="carouseldivmain p-4">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner carousel-inner-div ">
    <div class="carousel-item active ">
      <img src={carousel1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carousel2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carousel3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={carousel4} class="d-block w-100" alt="..."/>
    </div>
  </div>
 <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
        </div>

        {/* cards */}
        <div className="col-lg-12 row mr-auto ml-auto cardmaindiv justify-content-around pt-5 pb-5 text-white ">

        <div class="card maincards col-lg-2">
  <img src={card1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Movies</h5>
    <p class="card-text">Search your favourite movies.watch and know everything about the movies</p>
    <Link to='/register'><a href="#" class="btn btn-primary">Search movies</a></Link>
  </div>
</div>

<div class="card maincards col-lg-2">
  <img src={card2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Industries</h5>
    <p class="card-text">Search movies based on industries. For example hollywood, Kollywood, etc.</p>
    <Link to='/register'><a href="#" class="btn btn-primary">Search by industries</a></Link>
  </div>
</div>

<div class="card maincards col-lg-2">
  <img src={card3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ratings</h5>
    <p class="card-text">Rate your favourite movies and know about the ratings of all the movies you want.</p>
   <Link to='/register'> <a href="#" class="btn btn-primary">Give ratings</a></Link>
  </div>
</div>

<div class="card maincards col-lg-2">
  <img src={card4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Upcoming</h5>
    <p class="card-text">Know about the upcoming movies and its cast and crew and all the details</p>
    <Link to='/register'><a href="#" class="btn btn-primary">Upcoming movies</a></Link>
  </div>
</div>
<div class="card maincards col-lg-2">
  <img src={card5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Premium plans</h5>
    <p class="card-text">Subscribe movies explorer now and enjoy the free plan of 1 year at just Rs 999</p>
    <Link to='/register'><a href="#" class="btn btn-primary">Subscription Plans</a></Link>
  </div>
</div>
</div>

{/* FOOTER */}

      <div className="footerdiv text-white text-center pt-5 pb-5">
        <p className="mb-0">Conditions of Use</p>
        <p className="mb-0">Privacy Notice</p>
        <p className="mb-0">Interest-Based Ads</p>
      </div>
        </>
    );
}
export default Landing