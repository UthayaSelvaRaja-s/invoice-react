import React from 'react';
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Aboutus from './Components/About/Aboutus';
import CreateAccount from './Components/SignUpPage/CreateAccount';
import DashBoard from './Components/Dashboard/DashBoard';
import CustomAdd from './Components/Pages/CustomAdd';
import Test from './Components/test/test'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
     <Route path='/' element={<SignUp/>}></Route>
     <Route path='/signin' element={<SignIn/>}></Route>
     <Route path='/aboutus' element={<Aboutus/>}></Route>
     <Route path='/signup' element={<CreateAccount/>}></Route>
     <Route path='/dashboard' element={<DashBoard/>}></Route>
     <Route path='/customer' element={<CustomAdd/>}></Route>

     <Route path='/test' element={<Test/>}></Route>
      </Routes>

    </div>

    </Router>
  );
}

export default App;
