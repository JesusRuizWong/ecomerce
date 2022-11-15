import { BrowserRouter,Routes,Route } from "react-router-dom" 
import HomePage from "../pages/HomePage" 
import AboutPage from "../pages/AboutPage"    
import NotFoundPage from "../pages/NotFoundPage" 
import Navbar from "../components/Header" 
import Footer from "../components/Footer"


const Router =()=>{
  return (
    <BrowserRouter>
    <Navbar />  
    <Routes>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/notfound" element={<NotFoundPage/>}/>
  
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default Router;