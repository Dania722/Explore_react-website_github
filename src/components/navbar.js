import React from 'react';

import '../Appp.css';
import menubtn from "../assests/img/menubtn.png";

function Navbar ()
{

// toggle button 
// const menubtn = document.getElementById("toggle")
// const links = document.querySelector('.link')
// menubtn.addEventListener('click',()=>{
//     links.classList.toggle("menu")

// })

    return (
        <>
 <nav className="navbar">
     <h1 className="logo"> Explore </h1>
     <ul className="link">
         <li> <a href="home" className="ll" target="_blank"> Home </a> </li>
         <li > <a href="upcoming"  className="ll"  target="_blank"> Tour </a> </li>
         <li > <a href="upcoming" className="ll"  target="_blank"> Explore </a> </li>
         <li> <a href="#" className="ll"  target="_blank"> About </a> </li>
         <li > <a href="footer" className="ll"  target="_blank"> Contact </a> </li>
     </ul>
     <img id="toggle" src={menubtn} className="btn"/>

 </nav>

        </>
    )
}
export default Navbar ; 