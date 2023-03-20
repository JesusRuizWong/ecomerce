import HomePage from "../pages/home/HomePage" 
import AboutPage from "../pages/AboutPage"    
import NotFoundPage from "../pages/NotFoundPage" 
import Navbar from "../design/Header" 
import Footer from "../design/Footer"
import Login from "../pages/autentication/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BannerContents from "../pages/config/contents/BannerContents"


const Router =()=>{
  return (
    <BrowserRouter>
    <Navbar />  
    <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/notfound" element={<NotFoundPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/bannercontents" element={<BannerContents/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default Router;