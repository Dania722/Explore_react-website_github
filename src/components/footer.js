import React from "react";

import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineGithub} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
function Footer () {
    return (
        <>
        <section class="footer" id="footer">

<div class="container-fluid">

    <div class="social-icons mt-4">
        <a href="https://www.facebook.com/dania.ahmed.31337" target="_blank"><AiFillFacebook  size="5em"/> </a> 
        <a href="https://github.com/Dania722" target="_blank"><AiOutlineGithub size="5em"/></a>
        <a href="https://twitter.com/DaniaAh11522437" target="_blank"><AiFillTwitterCircle  size="5em"/></a>
        <a href="https://www.linkedin.com/in/dania-ahmed-185a48232/" target="_blank">< AiFillLinkedin  size="5em"/></a> 
        <a href="mailto:daniaahmad420@example.com" target="_blank" ><AiOutlineMail  size="5em"/></a>
    </div>
    <h5> &copy; Copy Right by Dania Ahmed  </h5>
</div>
</section>
        </>
    )
}
export default Footer ; 