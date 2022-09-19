

// // import { useContext } from "react";
// // import { useState } from "react";
// // import userContext from "./context";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import  "./App.css";

// // export default function Withdraw() {
// //   //use context
// //   let ctx = useContext(userContext);
// //   var len = ctx.users.length;
// //   //state for context
// //   const [value, setValue] = useState();
// //   const [amount, setAmount] = useState(ctx.users[len - 1].balance);
// //   const [status, setStatus] = useState();
// //   const withdraw = () => {
// //     if (value < amount) setAmount(ctx.users[len - 1].balance - value);
// //     else {
// //       alert("Your Account balance is insufficient");
// //     }
// //   };
// //   ctx.users[len - 1].balance = amount;
// //   return (
// //     <>
// //    <center>
// //     <div className="withdraw">
// //       <form className="depform">
// //         <h1 className="head2">Start your withdraw</h1>
// //         <label>
// //           {status}
// //           {}
// //           <input
// //             type="number"
// //             placeholder="Enter Amount"
// //             onChange={(e) => setValue(Number(e.target.value))}
// //           />
// //           <input
// //             type="button"
// //             className="credit"
// //             value="credit"
// //             disabled={!value}
// //             onClick={withdraw}
// //           />
// //         </label>
// //         <h1>Your Account balance is ${amount} </h1><br></br>
      
        
       
// //       </form>
// //       </div>
// //       </center> </>
// //   );
// // }



// // import { useContext } from "react";
// import { useState } from "react";
// // import userContext from "./context";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import  "./App.css";

// export default function Withdraw() {
//   const navigate=useNavigate();
// const token=localStorage.getItem('x-auth');
// const[bal,setbal]=useState();
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
//  async function Updatewithdraw(e) {
//     e.preventDefault();
//     const url = "http://localhost:1000/api/bank/withdraw";
//     axios
//       .post(url, {
//         withdraw:values
//       },config
//       )
      
//       .then((res) => {
//         navigate("/withdraw")
//         console.log(res.data)
//         setbal(res.data.balance)
//       })
//       .catch((error) => {
      
//         console.log(error.response.data);
        
//         })
   
//   }
  
//   return (
//     <>
//    <center>
//     <div className="withdraw">
//       <form className="depform">
//         <h1 className="head2">Start your withdraw</h1>
//         <label>
         
//           <input
// 							type="number"
// 							placeholder="Enter amount"
// 							name="withdraw"
//               onChange={(e) =>
//                 setValues(Number(e.target.value) )
//               }
// 							required
							
// 						/>
     
//         <button onClick={Updatewithdraw}>Submit</button>
//         {/* <button onClick={()=>(navigate('/main'))}>Back</button> */}
//         </label>
//         <h1>Your Account balance is ${bal} </h1><br></br>
      
        
       
//       </form>
//       </div>
//       </center> </>
//   );
// }

import { useState } from "react";
// import {useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Withdraw(){

// let style={
//   backgroundImage: "url('https://skykasino.com/assets/img/bg-deposit.png')",
//   height:'85vh',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',

// }
const navigate=useNavigate();
const token=localStorage.getItem('x-auth');
const[bal,setbal]=useState();
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
 async function withdraw(e) {
    e.preventDefault();
    const url = "http://localhost:1000/api/bank/withdraw";
    axios
      .post(url, {
        withdraw:values
      },config
      )
      
      .then((res) => {
       
        console.log(res.data)
        setbal(res.data.balance)
      })
      .catch((error) => {
      
        console.log(error.response.data);
         
        })
      // console.log(data);
  }
  
  
  

 
  
 
  return(<>

<center>
<div className="forms">
<div className='cubic'>
  <h4>Account Withdraw Balance is ${bal}</h4>
  <br></br>
  <label>
  <input
							type="number"
							placeholder="Enter amount"
							name="withdraw"
              onChange={(e) =>
                setValues(Number(e.target.value) )
              }
							required
							
						/><br></br><br></br>
 <button onClick={withdraw}>Submit</button>
 
  </label>
 
 </div>
  </div>
  </center>
  </>)
}



