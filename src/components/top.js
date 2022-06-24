import { Button, ButtonBase } from '@mui/material';
import React from 'react'

import {BsFillArrowUpCircleFill  }from "react-icons/bs"


var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic

  //ROOT elements are also called document elements.
  //rootElement returns the Element that is the root element of the document
  rootElement.scrollTo({
    top: 0,

   // auto	Allows a straight jump "scroll effect" between elements within the scrolling box. This is default
//smooth	Allows a smooth animated "scroll effect" between elements within the scrolling box.
    behavior: "smooth"
  });
}
function Top()
{
    return( 

         <BsFillArrowUpCircleFill  id="scrollToTopBtn" onClick={scrollToTop} />
    );
}
export default Top;





// scrollToTopBtn.addEventListener("click", scrollToTop);
