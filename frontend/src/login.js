import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";

import App from "./App";

export default function Login() {
  try {
  } catch (error) {
    console.log(error.message);
  }
 
//   let token=useContext(AuthContext);
// console.log(token.users[0].student);
const navigate=useNavigate();
const [model,setModel]=useState(false);
const [error,setError]=useState("");

  const [values, setValues] = useState({

    email: "",
    password: ""
  });
  const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

  async function handle(e) {
    e.preventDefault();
    const url = "http://localhost:1000/api/bank/login";
    axios
      .post(url, {
        email: values.email,
        password: values.password
      },config
      )
      
      .then((res) => {
        if (res.status === 400) {
          console.log("Something went wrong");
          
        } else {
        // setModel(true);
        alert('Successfully Logged In')
        //  console.log(token.users[0].student.replace(res))
          // console.log(token)
          // navigate("/outpassalldata")
          // console.log(res.data);
          
          localStorage.setItem('x-auth',res.data);
          localStorage.getItem('x-auth');
          console.log(localStorage.getItem('x-auth'));
          // navigate("/navigate");
          // console.log(token)
         
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) 
          setError(error.response.data);
           console.log(error)
        })
      // console.log(data);
  }
  

  

  return (
    <> 
    <center>
    <div className="forms">
    <label>
      
						<form method='post'>
              <div className='cube'>
                <div>
						<h1  className="size">Login Your Account</h1></div>
						<input
							type="email"
							placeholder="Email"
							name="email"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
							required
		
						/><br></br>
            <br></br>
						<input
							type="password"
							placeholder="Password"
							name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
							required
						
						/><br></br><br></br>
						{error && <div >{error}</div>}
            
						<button type="submit" onClick={handle}>
							Login
						</button>
          </div>
						</form>
				
					
		 </label>	
     </div>
          </center>
 
    </>
  );
}
