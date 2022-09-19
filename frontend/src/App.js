

// // /////////////////////////bank project
// // // import "./App.css";
// // // import { HashRouter, Route, Routes } from "react-router-dom";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import context from "./context";

// // // import Deposit from "./deposit";
// // // import Alldata from "./alldata";
// // // import Withdraw from "./withdraw";
// // // import Createaccount from "./createaccount";
// // // import Bank from "./bank";
// // // export default function App() {
// // //   return (
// // //     <>
// // //       <nav class="navbar navbar-expand-lg bg-light">
// // //         <div class="container-fluid">
          
// // //           <a class="navbar-brand" href="#/bank">
         
// // //             Bank
// // //           </a>
// // //           <button
// // //             class="navbar-toggler"
// // //             type="button"
// // //             data-bs-toggle="collapse"
// // //             data-bs-target="#navbarNav"
// // //             aria-controls="navbarNav"
// // //             aria-expanded="false"
// // //             aria-label="Toggle navigation"
// // //           >
// // //             <span class="navbar-toggler-icon"></span>
// // //           </button>
          

// // //           <div class="collapse navbar-collapse" id="navbarNav">
// // //             <ul class="navbar-nav">
// // //               <li class="nav-item">
// // //                 <a
// // //                   class="nav-link active"
// // //                   aria-current="page"
// // //                   href="#/createaccount"
// // //                 >
// // //                   Createaccount
// // //                 </a>
// // //               </li>
// // //               <li class="nav-item">
// // //                 <a class="nav-link active" aria-current="page" href="#/deposit">
// // //                   Deposit
// // //                 </a>
// // //               </li>
// // //               <li class="nav-item">
// // //                 <a
// // //                   class="nav-link active"
// // //                   aria-current="page"
// // //                   href="#/withdraw"
// // //                 >
// // //                   Withdraw
// // //                 </a>
// // //               </li>
// // //               <li class="nav-item">
// // //                 <a class="nav-link" href="#/alldata">
// // //                   Alldata
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       <HashRouter>
// // //         <context.Provider
// // //           value={{
// // //             users: [
// // //               {
// // //                 sno:"1",
// // //                 name: "hepsi",
// // //                 email: "hepsi@gmail.com",
// // //                 password: "holy christ",
// // //                 balance: 10
// // //               }
// // //             ]
// // //           }}
// // //         >
// // //           <Routes>
// // //           <Route path="/bank" element={<Bank />} />
// // //             <Route path="/deposit" element={<Deposit />} />
// // //             <Route path="/alldata" element={<Alldata />} />
// // //             <Route path="/withdraw" element={<Withdraw />} />
// // //             <Route path="/createaccount" element={<Createaccount />} />
// // //           </Routes>
// // //         </context.Provider>
// // //       </HashRouter>
// // //     </>
// // //   );
// // // }

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route, HashRouter } from "react-router-dom";
// //import {createContext} from "react";
// import userContext from "./context.js"

// import Bank from "./bank";
// import Createaccount from "./createaccount";
// import Deposit from "./deposit";
// import Withdraw from "./widthdraw";
// import AllData from "./alldata";
// // import context from "react-bootstrap/esm/AccordionContext";

// function App() {
//   return (<>
//   <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  
//   <div class="container">
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="#">Navbar</a>
//     </div>
//   </nav>
// </div>
// </nav>
// </>
//   )

//     <HashRouter>
    
//       <userContext.Provider
//         value={{
//           users: [
//             {
//               name: "",
//               email: "",
//               balance: 0
//             }
//           ]
//         }}
//       >
        
//           <Routes>
//             <Route path="/bank" element={<Bank />} />
//             <Route path="/createaccount" element={<Createaccount />} />
//             <Route path="/deposit" element={<Deposit />} />
//             <Route path="/withdraw" element={<Withdraw />} />
//            <Route path="/alldata" element={<AllData />} />
//           </Routes>
      
//       </userContext.Provider>
//     </HashRouter>
  
// }
// export default App;


import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import context from "./context";
import Nav from "./nav"
import Deposit from "./deposit";
import Alldata from "./alldata";
import Withdraw from "./withdraw";
import Createaccount from "./register";
import Bank from "./bank";
import Login from "./login";
import nav from "./navigate";
export default function App() {
  return (
    <>
 <HashRouter>
        <Nav/>
        <context.Provider
          value={{
            users: [
              {
                sno:"1",
                name: "hepsi",
                email: "hepsi@gmail.com",
                password: "holy christ",
                balance: ""
              }
            ]
          }}
        >
          <Routes>
          <Route path="/bank" element={<Bank />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/alldata" element={<Alldata />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/register" element={<Createaccount/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/navigate" element={<Navigate/>} />
          </Routes>
        </context.Provider>
      </HashRouter>
    </>
  );
}



