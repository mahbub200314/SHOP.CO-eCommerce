import { NavLink,Link,useNavigate } from 'react-router'
import './navbar.css'

import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

import { useState,useEffect,useRef, useContext } from 'react';
import { AuthContext } from '../../AuthProvider';




 

const Navbar = () => {

    const[search, setSearch] = useState(false); //usestate for searchbar toggle
    const[navbars ,setNavbar] = useState(false)  //useState for navbar toggle 
    const searchRef = useRef(null);

      

    const searchInputShow = ()=>{
             setSearch(prev => !prev)
    }

    // navbar togggle
    const navbarToggle = ()=>{
        setNavbar(prev => !prev)
    }

    useEffect(() => {
        if (!search) return;
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [search]);



    // user navigate here........................
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
   
    const forLogin = () => {
        if(user){
           navigate('/user')
        }
        else{
            navigate('/login')
        }
    }

//  const {user, loading}= useContext(AuthContext)

  return (
    <div className='navbars relative w-full flex items-center justify-between bg-white   py-2 px-[3%] h-[70px]'>
        <FaBars onClick={navbarToggle} className='text-2xl md:hidden cursor-pointer'/>
     <div className="logo">
       <h1 className='text-[2rem] font-bold p-0.5'> <Link to='/'>SHOP.CO</Link> </h1>
     </div>

     <div className="navs ">
        <ul className={`z-10 md:flex gap-5 ${navbars? "max-md:bg-gray max-md:absolute max-md:top-[100%] max-md:left-0 max-md:right-0  max-md:text-[2rem] max-md:font-medium":"max-md:hidden"}`}>
            <li><NavLink to='shop'  className={({isActive}) => isActive? 'activeLink' : ""} >Shop</NavLink></li>
            <li><NavLink to='onSale'  className={({isActive}) => isActive? 'activeLink' : ""} >On Sale</NavLink></li>
            <li><NavLink to='newArrivals' className={({isActive}) => isActive? 'activeLink' : ""} >New Arrivals</NavLink></li>
            <li><NavLink to='brands'  className={({isActive}) => isActive? 'activeLink' : ""} >Brands</NavLink></li>
        </ul>
     </div>
     
     <div className="navs flex gap-5" ref={searchRef}>
            <CiSearch onClick={searchInputShow} className='hidden cursor-pointer max-sm:flex text-2xl font-extrabold'/>

        <div ref={searchRef}
         className={`search  relative ${search?'max-sm:absolute max-sm:right-[20%] max-sm:-bottom-11' :'max-sm:hidden'}`}>
          
            <input className='bg-white sm:border-2 max-sm:border-b-2 sm:rounded-[10px] outline-none h-[2.5rem] px-8 ' type="search" name="search" id="" placeholder='Search for products'/>
            <CiSearch className='absolute top-1/2 transform -translate-y-1/2 left-[5%] max-sm:hidden'></CiSearch>
        </div>{/*search*/}

        <div className='flex gap-5 items-center'>
            <NavLink to='cart'  className={({isActive}) => isActive? 'activeLink' : ""}><IoCartOutline className='text-2xl font-light hover:text-price hover:border-b-2'/></NavLink>

            
            <div onClick={forLogin}>
                {user ?(
                    <img className='w-[40px] h-[40px] rounded-full border-black border-2 p-[2px] cursor-pointer'
                     src={user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbZHvsyM8U3XFC0pNFenrXXBuVSkWU5GUTg&s'}
                      alt="user-photo" 
                       onError={(e) => { e.currentTarget.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbZHvsyM8U3XFC0pNFenrXXBuVSkWU5GUTg&s' }} 
                      />
                ):   <FaRegUserCircle  className=' text-2xl font-light cursor-pointer'/>}
            </div>
        </div>

     </div>
    </div>
  )
}

export default Navbar
