import React from "react";
import two from "../assests/img/two.jpg";
import tracking from "../assests/img/tracking.jpg";
 import '../App.css'
import '../Appp.css'
import { alignProperty } from "@mui/material/styles/cssUtils";
import { textAlign } from "@mui/system";

function Upcoming ()
{
    return(
        <>
      <section class="event">
        <div class="title"> 
        <h1 id="upcoming">
            Upcoming Events 
        </h1>
        <div class="line"></div>
    </div>
        <div class="col">
            <div class="row">
                <img   class="img" src={two }width="500px" height="300px" alt=""/> 
                <h4>
                  Paragliding Tour    </h4> 
                  <p> Lorem ipsum, dolor sit amet res miaspernatur! Itaque exercitationem consectetur soluta laboriosam,<br/>  odit provident at nostrum saepe iure ullam numquam accusantium. </p>
                  <br/>
                  <a href="#" class="text-white hover_pink"> Many More</a>
             
            </div>
            <div class="row">
                <img class="img" src={tracking} width="500px" height="300px" alt=""/> 
                <h4>
                  Tracking Stroies  </h4>
                  <p> Lorem ipsum, dolor sitnus eveniet nulla, debitis error ut aspernatur! Itaque <br/>   exercitationem consectetur soluta laboriosam,odit provident at nostrum saepe iure ullm. </p>
                  <br/>
                  <a href="#" class="text-white hover_pink"> Many More</a>
               
            </div>
        </div>
        
    </section>
        </>
    )
}
export default Upcoming ; 

