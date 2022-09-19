
// import './App.css'

// import { useFormik } from "formik";
// // import { useState } from "react";
// import userContext from "./context"
// import { useContext } from "react"

// export default function Create(){
// //use contex
// let ctx = useContext(userContext);
// var len = ctx.users.length;
//     const formik = useFormik({
//         initialValues: {
//             sno:Number(len+1),
//             name:"",
//             email:"",
//             password:"",
//             balance:0
//            },
//           onSubmit: (values) => {
//             alert("Your Account was Created")
//              var userDetails=values
//             console.log(userDetails);
//             ctx.users.push(userDetails)},
//           validate: (values) => {
//             let errors = {};
//             if (!values.email) {
//               errors.email = 'Required';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//               errors.email = 'Invalid email address';
//             }
//             if(!values.password) 
//             {
//               errors.password="Required";
//             }
           
//             return errors;
//           }});
// return(
//     <> 
//       <center>
    
//     <div className='forms'>
//        {/* <img className="cdimg" src={cdimg} alt="cd"></img> */}
//        {/* <div className='forms'> */}
      
//        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//        <form className='form' onSubmit={formik.handleSubmit}>
//        <label>First Name</label>&nbsp;&nbsp;
//        <input id="name" name="name" type="text" placeholder="Enter your name"onChange={formik.handleChange} value={formik.values.name}/><br /><br />
//        <label>Email Address</label>&nbsp;&nbsp;
//        <input id="email" name="email" type="email"  placeholder="Enter your mail"onChange={formik.handleChange} value={formik.values.email}/><br /><br />
//           <label>Password</label>
//       <input id="password" name="password" type="password"  placeholder="Enter your password"onChange={formik.handleChange} value={formik.values.password}/><br /><br />      
//       <button className="cdbtn" type="submit">CreateAccount</button><br /><br /> 
//       {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2oAXNKJ79GnQ0TsO2Tj6Q47AcBUNPjZhrA&usqp=CAU'   width="70%"   height="50%"/> */}
//      </form>  
//     </div></center>
//     </>)
// }



import './App.css'
import axios from "axios";

import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';


export default function Create(){
    try {
    } catch (error) {
      console.log(error.message);
    }
    const navigate=useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
       phone: "",
    
    });
    const [error, setError] = useState("");
    const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
    async function handle(e) {
      e.preventDefault();
      const url = "http://localhost:1000/api/bank/register";
      axios
        .post(url,{
          name: values.name,
          email: values.email,
          password: values.password,
          phone: values.phone,
         
        },config
        )
        
        .then((res) => {
          if (res.status === 400) {
            console.log("Something went wrong");
          } else {
            alert("Registerd Successfully");
            navigate("/login")
            console.log(res);
          }
        })
        .catch((error) => {
          setError(error.response.data)
          console.log(error);
        });
        //console.log(data);
    }
   

 
    return (
        <>
        <center>

        <div className="forms">
          <label>
      <div className='square'>
          <div>
            <h1 className="size">Create Account</h1>
            </div>
               <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                /><br></br>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setValues({ ...values, email: e.target.value })
                  }
                /><br></br>
                <br></br>
                <input
        
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                /><br></br>
                <br></br>
                 <input
            
                  type="number"
                  placeholder="Enter PhoneNumber"
                  onChange={(e) =>
                    setValues({ ...values, phone: e.target.value })
                  }
                />
                     {error && <div>{error}</div>}
                     <br></br>
                     <br></br>
                     <button type="submit" onClick={handle}>
                                Register
                                </button>
                                </div>
                                 </label>
                                 </div>
                     </center>
             </>
      );
    }
    