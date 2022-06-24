import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import '../Appp.css'
import header from "../assests/img/header.jpg";
import s from "../assests/img/s.jpg";
import slideshow1 from "../assests/img/slideshow1.jpg";
import slideshow2 from "../assests/img/slideshow2.jpg";
import slideshow3 from "../assests/img/slideshow3.jpg";
import slideshow4 from "../assests/img/slideshow4.jpg";
import slideshow5 from "../assests/img/slideshow5.jpg";



function Slider (){
    return (
        <>
         <Carousel className="main-slide">
                <div>
                <img src={header}ClassName="img-fluid" height={"900px"} width= {"350px"} />
                </div>
                <div>               
               <img src={s }ClassName="img-fluid "  height={"900px"} width= {"350px"}/>
                </div>
                <div>
                <img src={slideshow1}ClassName="img-fluid " height={"900px"} width= {"350px"}/>
                </div>
                <div>
                <img src={slideshow2}ClassName="img-fluid "  height={"900px"} width= {"350px"}/>
                </div>
                <div>
                <img src={slideshow3}ClassName="img-fluid "  height={"900px"} width= {"350px"}/> 
                </div>
                <div>
                <img src={slideshow4}ClassName="img-fluid "   height={"900px"} width= {"350px"}/>
                </div>
                <div>
                <img src={slideshow5}ClassName="img-fluid "   height={"900px"} width= {"350px"}/> 
                </div>
            </Carousel>
        </>
    )
}
export default Slider ; 