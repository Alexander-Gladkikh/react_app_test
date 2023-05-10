import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const onClick = () => setToggle(prev => !prev)
    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])
  return (
    <div className="App">
        {toggle === true && <div data-testid='toggle-elem'>toggle</div>}
        {data && <div style={{color: "red"}}>data</div>}
     <h1>Hello World</h1>
      <button data-testid='toggle-btn' onClick={onClick}>click me</button>
      <input placeholder='input value...' type="text"/>
    </div>
  );
}

export default App;
