import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from "./Component/Home"
import Registry from './Component/Registry';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home></Home>}>
          </Route>
          <Route path='/registery' element={<Registry></Registry>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
