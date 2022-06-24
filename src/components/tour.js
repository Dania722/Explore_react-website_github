import React from "react";
import '../Appp.css';
import '../App.css';
import trip1 from "../assests/img/trip1.jpg"
import trip3 from "../assests/img/trip3.jpg"
import trip2 from "../assests/img/trip2.jpg"
import trip5 from "../assests/img/trip5.jpg"
import tt from "../assests/img/tt.jpg"
import s from "../assests/img/s.jpg";
import slideshow2 from "../assests/img/slideshow2.jpg";
import slideshow3 from "../assests/img/slideshow3.jpg";
import Gallery from "./gallery";


function Tour (){
    return (
        <>
        <section class="tour">
    <div className="col content-col">
        <div class="row">
            <h1 id="upcoming">
                Up Coming Tour & Destination 
            </h1>
            <div class="line"></div>
            <p>
                Lorem ipsum dolor sit ametimus, vonostrum, porro vero dolore consequatur eligendi quas nihil. Nam ratione, maxime est rerum dolor autem veniam nulla?
            </p>
            <br/>
            <a href="#" class="text-white hover_pink"> Many More</a>
        </div>
        
    <Gallery/>
    </div>

</section>

        </>
    )
}

export default Tour ; 