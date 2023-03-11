import { BrowserRouter } from "react-router-dom";

import { About, Contact, Achievement, Hero, Navbar, Tech, Works,  } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 '>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className=' bg-[#1e89db] bg-cover bg-no-repeat bg-center'>
      
          <About />
        </div>
      
  =
        <Works />
        <div className=' bg-[#ffffff] bg-cover bg-no-repeat bg-center'>
        <Achievement />
        </div>
        <div className=' bg-[#420FE7] bg-cover bg-no-repeat bg-center'>
          <Contact />
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
