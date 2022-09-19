
// // import "./App.css";
// // import axios from "axios";
// // import { useContext, useState,useEffect } from "react";
// // import userContext from "./context";

// // export default function Deposit() {
// //   //use context
// //   let ctx = useContext(userContext);
// //   var len = ctx.users.length;
// //   //declare state for context
// //   const [amount, setAmount] = useState(ctx.users[len - 1].balance);
// //   const [value, setValue] = useState(0);
// //   //for condition
// //   const [status, setStatus] = useState();
// //   const deposit = () => {
// //     //add value in deposit
// //     if (value > 0) setAmount(ctx.users[len - 1].balance + value);
// //     else {
// //       alert("Enter a valid amount");
// //     }
// //   };
// //   //assign amout in context
// //   ctx.users[len - 1].balance = amount;
// //   return (
// //     <>
    
// //     <center>
// //     <div className='deposit'>
// //       <form className="depform">
// //         <h1 className="head2">Start your Deposit</h1>
// //         <label>
// //           {/* {status} */}
// //           {}
// //           <input
// //             type="number"
// //             placeholder="Enter Amount"
// //             onChange={(e) => setValue(Number(e.target.value))}
// //           />
// //           <input
// //             type="button"
// //             className="depo"
// //             value="deposit"
// //             disabled={!value}
// //             onClick={deposit}
// //           />
// //         </label>
// //         <h2 className="head3">Your Account balance is ${amount}</h2><br></br>
     
// //       </form>
// //       </div>
     
// //    </center></>
// //   );
// // }



// import "./App.css";
// import axios from "axios";
// import {  useState} from "react";

// import { useNavigate } from "react-router-dom";
// // import userContext from "./context";

// export default function Deposit() {
//   const token=localStorage.getItem('x-auth');
// const navigate=useNavigate();
// async function dep(){
//   navigate('/deposit')
// }
// const[bal,setbal]=useState(0);
//  const [values,setValues]=useState(0);
//  const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'x-auth':token
//     }
//   };
//  async function Updatedeposit(e) {
//     e.preventDefault();
//     const url = "http://localhost:1000/api/bank/update";
//     axios
//       .post(url, {
//         deposite:values
//       },config
//       )
      
//       .then((res) => {
       
//         console.log(res.data)
//         setbal(res.data.balance)
//         navigate("/deposit")
//       })
//       .catch((error) => {
//         // if (
//         //   error.response &&
//         //   error.response.status >= 400 &&
//         //   error.response.status <= 500
//         // ) 
//         console.log(error);
//           // console.log(error)
//         })
//       // console.log(data);
//   }
//   return (
//     <>
    
//     <center>
//     <div className='deposit'>
//       <form className="depform ">
//         <h1 className="head2">Start your Deposit</h1>
//         <label>
//           {/* {status} */}
//           {}
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             onChange={(e) =>
//               setValues(Number(e.target.value))}
//               required
//           />
//          <button onClick={Updatedeposit}>Submit</button>
//         </label>
//         <h2 className="head3">Your Account balance is ${bal}</h2><br></br>
//         <button onClick={dep}>Deposite Page</button>
//       </form>
//       </div>
     
//    </center></>
//   );
// }

import { useState } from "react";
// import {useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Deposit(){


const token=localStorage.getItem('x-auth');
const navigate=useNavigate();
const[bal,setbal]=useState(0);
 const [values,setValues]=useState(0);
 const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-auth':token
    }
  };
 async function deposite(e) {
    e.preventDefault();
    const url = "http://localhost:1000/api/bank/update";
    axios
      .post(url, {
        deposite:values
      },config
      )
      
      .then((res) => {
       
        console.log(res.data)
        setbal(res.data.balance)
      })
      .catch((error) => {
      
        console.log(error);
         
        })
      // console.log(data);
  }
  
  
  

 
  
 
  return(<>

<center>
<div className="deposit">
<div className='cubic'>
 
  <h4>Account Deposit Balance is ${bal}</h4>
  <br></br>
  <label>
  <input
							type="number"
							placeholder="Enter amount"
							name="deposit"
              onChange={(e) =>
                setValues(Number(e.target.value))
              }
							required
							
						/><br></br><br></br>
 <button onClick={deposite}>Submit</button>

  </label>
  
  </div>
  </div>
  </center>
  </>)
}