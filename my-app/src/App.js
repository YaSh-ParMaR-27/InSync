import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home'
import Login from './pages/login_signup/Login';
import Signup from './pages/login_signup/Signup';
import Error from './components/Error'
import Footer from './components/Footer'

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='*' element={<Error/>}/>
    </Routes> 

    <Footer/>
    </>
  );
}

export default App;
