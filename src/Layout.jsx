import React from 'react'
import Navbar from './component/navbar/Navbar'
import Home from './pages/Home/Home'
import Brand from './component/brand/Brand'
import Top from    './component/top selling/Top'
import NewArrival from './component/new arrival/NewArrival'
import Review from './pages/Review/Review'
import Footer from './component/footer/Footer'
const Layout = () => {
  return (
    <div className='layout relative pt-[70px]'>

         

      <div className="navbar fixed top-0 left-0 w-full z-10 ">
        <Navbar/>
      </div>
{/* .................................... */}
      <div className="heroSection">
           <Home/>
      </div>

 {/*...... .. .. . . .  .................. */}
      
      <div className="brand">

           <Brand/>
      </div>

{/* ................................................... */}

      <div className="topselling">
            <Top/>
      </div>


{/* .............................................. */}

        
        <div className="newarrval">
          <NewArrival/>
        </div>

{/* .................................................. */}



         <div className="review">
           <Review/>
         </div>


{/* ..................................................... */}


   <footer>
       <Footer/>
   </footer>


    </div>
  )
}

export default Layout
