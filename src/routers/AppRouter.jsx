import HomePage from "../pages/home/HomePage" 
import AboutPage from "../pages/AboutPage"    
import NotFoundPage from "../pages/NotFoundPage" 
import Navbar from "../design/Header" 
import Footer from "../design/Footer"
import Login from "../pages/autentication/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const Router =()=>{
  return (
    <BrowserRouter>
    <Navbar />  
    <Routes>
        <Route exact path="/" element={<AboutPage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/notfound" element={<NotFoundPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
  
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default Router;