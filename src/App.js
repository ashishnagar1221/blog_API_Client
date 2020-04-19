import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Test1 from './components/Test/test1'
import Test2 from './components/Test/test2'
import Test3 from './components/Test/test3'
import Test4 from './components/Test/test4'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact={true} path="/">
        <Test1/>
      </Route>
      <Route path ="/2">
        <Test2/>
      </Route>
      <Route path ="/3">
        <Test3/>
      </Route>
      <Route path ="/4">
        <Test4/>
      </Route>

    </BrowserRouter>
    
    
  );
}

export default App;
