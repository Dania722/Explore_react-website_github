import React from "react";
import '../App.css'
import '../Appp.css'
import header from "../assests/img/header.jpg";
import s from "../assests/img/s.jpg";
import slideshow1 from "../assests/img/slideshow1.jpg";
import slideshow2 from "../assests/img/slideshow2.jpg";
import slideshow3 from "../assests/img/slideshow3.jpg";
import slideshow4 from "../assests/img/slideshow4.jpg";
import slideshow5 from "../assests/img/slideshow5.jpg";
import Slider from "./slider";


function Header (){

    return(
    <>
    <header>       
        <Slider/>
           <div class="header_content">
        
<h2 id="home"> Explore The World </h2>
<div class="line" >
    <h1>
        Live your life by a compass 
    </h1>
    <a href="#" class="text-white hover_pink"> Learn and More</a>
</div>
        </div>

    </header>
    </>
    )
}
export default Header;