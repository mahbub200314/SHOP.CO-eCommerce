import React from 'react'
import Navbar from './component/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './component/footer/Footer'

const NestedLayout = () => {
  return (
    <div className='layout relative pt-[70px]'>
    
    <div className="navbar fixed top-0 left-0 w-full z-10 ">
          <Navbar/>
    </div>
     
     <main className='min-h-[50vh]'>
        <Outlet/>
     </main>


      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default NestedLayout
