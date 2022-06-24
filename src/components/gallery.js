import React, { useState } from "react";
import trip1 from "../assests/img/trip1.jpg"
import trip3 from "../assests/img/trip3.jpg"
import trip2 from "../assests/img/trip2.jpg"
import trip5 from "../assests/img/trip5.jpg"
import tt from "../assests/img/tt.jpg"
import s from "../assests/img/s.jpg";
import slideshow2 from "../assests/img/slideshow2.jpg";
import slideshow3 from "../assests/img/slideshow3.jpg";
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';



function Gallery (){
    let img = [
        {
            id:1, 
            imgSrc:trip1
        },
        {
            id:2, 
            imgSrc:trip2
        },
        {
            id:3, 
            imgSrc:trip3
        },
        {
            id:4, 
            imgSrc:trip5
        },
        {
            id:5, 
            imgSrc:s
        },
        {
            id:6, 
            imgSrc:tt
        },
        {
            id:7, 
            imgSrc:slideshow3
        },
        {
            id:8, 
            imgSrc: slideshow2
        },
        

    ];
    const [model , setModel] = useState(false) ; 
    const [tempSrc , setTempSrc] = useState ("") ; 

    const getImg =(imgSrc) =>{
setTempSrc(imgSrc) ; 
setModel(true) ; 

    }
    return(
        <>
              <div className="gallery">
{
    img.map((item,index)=>{
        return (
            <div className="pics" key={index} onClick= {()=> getImg(item.imgSrc)} >
                <img src={item.imgSrc} style={{width:'100%'}}/>

            </div>   )
    })
}
        </div>
        <div className={model ? "model open" : "model"}>
       <img src={tempSrc}/>
       < CloseIcon onClick={ () => setModel(false) }/>
        </div>
        </>
    )
}
export default Gallery ; 