import './App.css'

import Layout from './Layout'
import { Route, Routes } from 'react-router'

import Shop from '../src/pages/Shop/Shop'
import Cart from './pages/cart/Cart'
import NestedLayout from './NestedLayout'
import Top from './component/top selling/Top'
import NewArrival from './component/new arrival/NewArrival'
import OnPage from './pages/on page/OnPage'
import Brand from './component/brand/Brand'
import Product from './pages/productDetails.jsx/Product'
import Login from './pages/login/Login';
import User from './pages/user/User'
function App() {
 

  return (
    <>
    <div className='app'>

      <Routes>
        <Route path='/' element={<Layout/>}></Route >




         <Route  element={<NestedLayout></NestedLayout>}>

            <Route path='shop' element={<Shop/>}></Route>
            <Route path='cart' element={<Cart></Cart>}></Route>
            <Route path='topSelling' element={<Top/>}></Route>
           <Route path='newArrivals' element={<NewArrival/>}></Route>
           <Route path='onSale' element={<OnPage></OnPage>}/>
           <Route path='brands' element={<Brand/>}/>
           <Route path='product/:id' element={<Product/>} />
           <Route path='login' element={<Login/>} />
           <Route path='user' element={<User/>} />
         </Route>

         
      </Routes> 
    </div>
  
    </>
  )
}

export default App
