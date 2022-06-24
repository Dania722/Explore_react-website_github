import React from "react";
import '../Appp.css';
import Top from "./top";
// import '../App.css';
function Feedback (){


  //suggesstion 

let  validateemail = () =>
{
    var emailError
    var email= document.getElementById('exampleFormControlInput1').value;
    emailError.style.display = 'block';
    if(email.length == 0){
        emailError = 'Email is Required';
        setTimeout(function(){emailError.style.display = 'none';}, 1000);
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError = 'Email Invalid';
        return false;
    }
    emailError = '<i class="fas fa-check-circle"></i>';
    return true;
}

let validatemessage= () =>{
    var messageError
    var message= document.getElementById('exampleFormControlTextarea1').value;
    messageError.style.display = 'block';
    var required = 30;
    var left = required - message.length; // gives value how much character is left
    if(left > 0){
      messageError = left + ' more Characters Required';
        setTimeout(function(){messageError.style.display = 'none';}, 1000);
        return false;
    }
    messageError = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateform(){
    var submitError
    if(!validatemessage() || !validateemail()){
      submitError.style.display = 'block';
      submitError = 'Please fill all the fields';
        setTimeout(function(){submitError.style.display = 'block';},1000);
        return false;
    }
    return true;
}

    return(
        <>
        <section class="tour">
    <div class="col content-col">
        <div class="row">
            <h1 id="upcoming">
               Your Suggesstion 
            </h1>
            <div class="line"></div>
            <p>
               Kindly give us your feedback or share your reviews !
            </p>
            <form method="get">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  onclick={validateemail}/>
                <span id="emailError"></span>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Valuable feedback" onclick={validatemessage}></textarea>
                <span id="messageError"></span>
                <br/>
            <input type="Submit" class="text-white hover_pink" onclick={validateform} id="sub"/>
                <span id="submitError"></span>
                </div>
          </form>
           
              </div>
        </div>
</ section >
<aside>
<Top/>
</aside>
        </>
    )
}
export default Feedback ; 



// import React from 'react';

// const validEmailRegex = RegExp(
//   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// );
// const validateForm = errors => {
//   let valid = true;
//   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//   return valid;
// };

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullName: null,
//       email: null,
//       password: null,
//       errors: {
//         fullName: '',
//         email: '',
//         password: '',
//       }
//     };
//   }

//   handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     let errors = this.state.errors;

//     switch (name) {
//       case 'fullName': 
//         errors.fullName = 
//           value.length < 5
//             ? 'Full Name must be at least 5 characters long!'
//             : '';
//         break;
//       case 'email': 
//         errors.email = 
//           validEmailRegex.test(value)
//             ? ''
//             : 'Email is not valid!';
//         break;
//       case 'password': 
//         errors.password = 
//           value.length < 8
//             ? 'Password must be at least 8 characters long!'
//             : '';
//         break;
//       default:
//         break;
//     }

//     this.setState({errors, [name]: value});
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     if(validateForm(this.state.errors)) {
//       console.info('Valid Form')
//     }else{
//       console.error('Invalid Form')
//     }
//   }

//   render() {
//     const {errors} = this.state;
//     return (
//       <div className='wrapper'>
//         <div className='form-wrapper'>
//           <h2>Create Account</h2>
//           <form onSubmit={this.handleSubmit} noValidate>
//             <div className='fullName'>
//               <label htmlFor="fullName">Full Name</label>
//               <input type='text' name='fullName' onChange={this.handleChange} noValidate />
//               {errors.fullName.length > 0 && 
//                 <span className='error'>{errors.fullName}</span>}
//             </div>
//             <div className='email'>
//               <label htmlFor="email">Email</label>
//               <input type='email' name='email' onChange={this.handleChange} noValidate />
//               {errors.email.length > 0 && 
//                 <span className='error'>{errors.email}</span>}
//             </div>
//             <div className='password'>
//               <label htmlFor="password">Password</label>
//               <input type='password' name='password' onChange={this.handleChange} noValidate />
//               {errors.password.length > 0 && 
//                 <span className='error'>{errors.password}</span>}
//             </div>
//             <div className='submit'>
//               <button>Create</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }


