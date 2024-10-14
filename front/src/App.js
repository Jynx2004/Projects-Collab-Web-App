import Posts from './pages/Posts';
import PForm from './pages/PForm';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';

import Header from "./components/Header";


function App() {

  const [navp,setnavp]= useState(false);
  const [headnme,setheadnme]=useState("");


  return (
    <div>
       <Header navdata={navp} snavdata={setnavp} headnme={headnme}/>
       <Routes>
        <Route path="/" element={<Login snavdata={setnavp} sethdnme={setheadnme}/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/posts" element={<Posts snavdata={setnavp}/>} />
        <Route path="/postform" element={<PForm hnme={headnme}/>} />
       </Routes>

    </div>
  );
}

export default App;
