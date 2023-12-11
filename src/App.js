import React, {useState} from 'react'
import Navbar from './Component/Navbar'
import FormUtils from './Component/FormUtils'
import Alert from './Component/Alert';
import About from './Component/About'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  
  const toggleMode = ()=>{
    if(mode == "light"){
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("dark mode has been enabled","success")
      document.title = "TextUtils - dark mode"
      setInterval(()=>{
        document.title = "sign in TextUtils"
      },2000)
      setInterval(()=>{
        document.title = "TextUtils is amazing"
      },1500)
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled","success")
    }
  }

  const [redMode, setRedMode] = useState("light");
  const toggleRedMode = ()=>{
    if(redMode == "light"){
      setRedMode("danger")
      document.body.style.backgroundColor = "grey"
      showAlert("red mode has been enabled","success")
    }
    else{
      setRedMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled","success")
    }
  }

  return (
    // <Router>
    <div>
    <Navbar title="TextUtils" about="About us" mode={mode} redMode={redMode} toggleMode = {toggleMode} toggleRedMode={toggleRedMode}/>
    <Alert alert = {alert}/>
    <div className='container my-5'>
    {/* <Switch> */}
      {/* <Route exact path="/"> */}
        <FormUtils mode={mode} showAlert={showAlert} redMode={redMode} />
      {/* </Route> */}
      {/* <Route exact path="/about">
        <About />
      </Route>
    </Switch> */}
    </div>
    </div>
    // </Router>
  )
}