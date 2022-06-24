import { Button } from "@mui/material";
import { useState } from "react";


 function Sug (){

    const initialvalue = {username: "" , email:"" , msg:""};
    const [formValues , setFromValues] = useState (initialvalue) ; 

    const handleChange = (e) =>{
console.log(e.target);
const {name , value} = e.target ; 
setFromValues({...formValues , name :value});
console.log(formValues);
    }
    return (
    <>
   <div className="container">
    <form>
        <div className="ui divider"> </div>
        <div className="ui form">
            <div className="field">
            <label> Username </label>
            <input type={"text"} name="username" placeholder="Name" value={formValues.username} onChange={handleChange}></input>
            </div>
            <div className="field">
            <label> Email </label>
            <input type={"email"} name="email" placeholder="Email" value={formValues.email}  onChange={handleChange}></input>
            </div>
            <div className="field">
            <label> Message </label>
            <input type={"text"} name="msg" placeholder="Your feedback" value={formValues.msg}  onChange={handleChange} ></input>
            </div>
            <Button className="fluid ui button blue"> Submit </Button>
        </div>
    </form>

   </div>
    </>
    )
 }
 export default Sug ; 