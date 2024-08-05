
import './App.css';
import { BrowserRouter, Route, Routes, useNavigation } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      
      <Routes>
     
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/myOrder' element={<MyOrder/>}/>
       
      </Routes>
        
        </BrowserRouter>
    </CartProvider>
   
    </>
  
  );
}

export default App;
