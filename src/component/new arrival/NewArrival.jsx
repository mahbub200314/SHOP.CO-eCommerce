import React from 'react'
import { useEffect, useState } from "react"
import { Link } from 'react-router'


const NewArrival = () => {


const [newArrival, setNewArrival] = useState([])
useEffect( ()=>{

   fetch('/products.json')
   .then(res => res.json())
  .then(data  =>{
    
    const arrival = data.filter(item => item.tags?.includes('new arrival'));
    setNewArrival(arrival);
  });

},[]);

const [show, setShow] = useState(false); //for all product show
const allproductShow = show ? newArrival : newArrival.slice(0,4);


  return (
    <div className='men text-center overflow-x-hidden py-5'>
      <h1 className="text-[3rem] font-bold m-5">New Arrival</h1>
          
          <div className="flex w-full items-center justify-center gap-10 flex-wrap px-5">
              {

        allproductShow.map( (newProduct)=>(
         
          <div key={newProduct.id} className="shadow-md rounded-[15px] overflow-hidden w-[250px] min-h-[320px] flex flex-col">
            
           <div className="img">
            <img src={newProduct.images[0]} alt={newProduct.name} className="w-[250px] h-[300px]"/>
           </div>

           <b>{newProduct.name}</b>
           <p className="px-2">{newProduct.description.split(" ").slice(0, 5).join(" ") + "..."}</p>

            <div className='flex justify-center items-center gap-2'>
              <h2 className="text-price my-1 font-medium">{newProduct.price}</h2>

               <Link to={`/product/${newProduct.id}`}>
               <button className=' w-fit text-price  self-center font-medium bg-gray px-5 my-2 rounded-[5px] cursor-pointer'>Buy </button>
               </Link>

           </div>

          </div>

        ))
      
      }
          </div>

         {
          !show && newArrival.length > 4 && (
          <button onClick={()=> setShow(true)} className="border-1 border-white2 px-5 py-1 rounded-[15px] font-medium shadow-lg my-5 cursor-pointer hover:bg-gray hover:border-transparent ">View All</button>
          )
         }
         
    </div>
  )
}

export default NewArrival

