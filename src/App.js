// import './App.css';
// import {useEffect, useState} from "react";
//
// function App() {
//     const [data, setData] = useState(null)
//     const [toggle, setToggle] = useState(false)
//     const [value, setValue] = useState('')
//     const onClick = () => setToggle(prev => !prev)
//     useEffect(() => {
//         setTimeout(() => {
//             setData({})
//         }, 100)
//     }, [])
//   return (
//     <div className="App">
//         <h1 data-testid='value-elem'>{value}</h1>
//         {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
//         {data && <div style={{color: "red"}}>data</div>}
//      <h1>Hello World</h1>
//       <button data-testid='toggle-btn' onClick={onClick}>click me</button>
//       <input onChange={e => setValue(e.target.value)} placeholder='input value...' type="text"/>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
    return (
        <BrowserRouter>
            <Link to='/' data-testid='main-link'>main </Link>
            <Link to='/about' data-testid='about-link'>about </Link>
            <Routes>
                <Route to='/' element={ <MainPage/> } />
                <Route to='/about' element={ <AboutPage/> } />
            </Routes>

        </BrowserRouter>
    );
};

export default App;
