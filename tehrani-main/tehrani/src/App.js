import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ToolBar from "./components/ToolBar/ToolBar.js";
import "rc-footer/assets/index.css";
import { BrowserRouter as Router  , Switch , Route , Link } from "react-router-dom";
import Home from "./components/Home/Home.js";
import LoginPage from "./components/LoginPage/LoginPage.js";
import AllArticles from "./components/AllArticles/AllArticles.js";
import ProductAdder from "./components/ProductAdder/ProductAdder";
import ProductPage from './components/ProductPage/ProductPage.js';
import './App.css';

// function importAll(r){
//   return r.keys().map(r);
// }
//
// const imgs = importAll(require.context("./products-images",false,/\.(png|jpe?g|svg)$/));


//    testing     //
import DashBoard from './components/dashboard/dashboard.js';
//    -------     //

function App(){
  return (
    <div className="vazir-font">
      <ToolBar />
      {/* <DashBoard /> */}
    </div>
  );
}

// function App() {

//     debugger;

//     return (
//       <Router>
//           <div>
//               <nav>
//                   <ul>
//                     <li>
//                         <Link to="/">خانه</Link>
//                     </li>
//                     <li>
//                         <Link to="/login">ورود</Link>
//                     </li>
//                     <li>
//                         <Link to="/allproducts">همه اجناس</Link>
//                     </li>
//                   </ul>
//               </nav>
//           </div>


//           <Switch>
//               <Route path="/login">
//                 <LoginPage />
//               </Route>
//               <Route path="/allproducts">
//                   <AllArticles />
//               </Route>
//               <Route path="/" >
//                 <Home />
//               </Route>
//           </Switch>
//       </Router>
//     );
// }


export default App;
