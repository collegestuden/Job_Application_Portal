// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         {/* <a href="https://vitejs.dev" target="_blank"> */}
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         {/* </a> */}
//         {/* <a href="https://react.dev" target="_blank"> */}
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         {/* </a> */}
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
//import Hello from './Components/Hello';
// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Reg from './Components/Reg';
import Home from './Components/Home';
import Gender from './Components/Gender';
import First from './Components/First';
import Location from './Components/Location';
import Aboutus from './Components/Aboutus';
import Jobsearch from './Components/Jobsearch';
import Appform from './Components/Appform';
import Type from './Components/Type';
import Sector from './Components/Sector';
import Companies from './Components/Companies';
import AdminLogin from './Components/AdminLogin';
import Dash from './Components/Dash';
import Add from './Components/Add';
import Nav from './Components/Nav';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<First/>}/>
      <Route path="/First" element={<First/>} />
      <Route path="/AdminLogin"  element={<AdminLogin/>}/>
      <Route path="/Nav"  element={<Nav/>}/>
      <Route path="/Dash"  element={<Dash/>}/>
      <Route path="/Add"  element={<Add/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Reg"  element={<Reg/>}/>
      <Route path="/Home"  element={<Home/>}/>
      <Route path="/Gender"  element={<Gender/>}/>
      <Route path="/Location"  element={<Location/>}/>
      <Route path="/Appform"  element={<Appform/>}/>
      <Route path="/Aboutus"  element={<Aboutus/>}/>
      <Route path="/Jobsearch"  element={<Jobsearch/>}/>
      <Route path="/Type"  element={<Type/>}/>
      <Route path="/Sector"  element={<Sector/>}/>
      <Route path="/Companies"  element={<Companies/>}/>

      <Route path="/Appform"  element={<Appform/>}/>
      </Routes>
      </div>
      
      
    </Router>
  );
};

export default App;
