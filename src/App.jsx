import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 '>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className=' bg-[#8ee04c] bg-cover bg-no-repeat bg-center'>
      
          <About />
        </div>
        <div className=' bg-[#E2FFFF] bg-cover bg-no-repeat bg-center'>
        <Experience />
        </div>
  =
        <Works />
       
        <div className=' bg-[#420FE7] bg-cover bg-no-repeat bg-center'>
          <Contact />
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
