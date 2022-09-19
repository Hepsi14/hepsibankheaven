


import "./App.css";
import context from "./context";
import { useContext ,useEffect,useState} from "react";
import axios from 'axios';

export default function Alldata() {
  const [data,setData]=useState([]);
  const config = {
     headers: {
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
       'Accept': 'application/json',
           'Content-Type': 'application/json',
          
     }
   };
  async function Getall() {
     
     const url = "http://localhost:1000/api/bank/getall";
     axios
       .get(url,config
       )
       
       .then((res) => {
        
         console.log(res.data)
     setData(res.data)
        
       })
       .catch((error) => {
         
         console.log(error.response.data);
         
         })
      
   }
   useEffect(()=>{
   Getall();
   },[])
   
   
 
  return (<> <center>
      <body><div className="color">
  <table>
     <tbody>
    
      <div className="alldatas">
        <tr className="trow">
   
        <td>Name</td>
        <td>Email</td>
        <td>Password</td>
        <td>CurrentBalance</td>
       </tr>
     {data.map((data,i)=>
       <tr key={i}>
      
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.password}</td>
         <td>{data.balance}</td>
       </tr>
     )}
     </div>
  </tbody>
  </table>
  
  {/* {JSON.stringify(ctx.users)} */}
  </div> </body></center></> 
    )
}


    


