
import './App.css';
import{ BrowserRouter, Route , Routes } from 'react-router-dom';
import { Home } from './pages/Home/home'
import {Courses} from './pages/Courses/Courses'
import {AboutUs} from './pages/About Us/AboutUs'
import {Pricing} from './pages/Pricing/Pricing'
import {Contact} from './pages/Contact/Contact'
import { SignUp } from './pages/Sign Up/Sign Up';
import { Login } from './pages/Login/Login';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Pricing" element={<Pricing/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
