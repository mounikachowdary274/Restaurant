
import './App.css';
import Home from './component/Home';
import About from './component/About';
import {Routes,Route} from 'react-router-dom'
import Work from './component/Work';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/testimonial' element={<Testimonials/>}/>
     </Routes>
     {/* <About/> */}
     {/* <Work/> */}
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
