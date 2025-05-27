import './product.css'
import Review from '../../pages/Review/Review'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AuthContext } from '../../AuthProvider'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '/public/firebase'



const Product = () => {

    const {id} = useParams()
    const[product, setProduct] =useState(null)
    const [quantity , setQuantity] = useState(1)
    const {user} = useContext(AuthContext)
   
    useEffect(()=>{

        fetch('/public/products.json')
        .then(res => res.json())
        .then(data => {
            const item = data.find( data=> data.id.toString() === id)
            setProduct(item)
        })

    },[id])

    const increase = () => setQuantity(prev => prev + 1)
    const decrease = () => { if(quantity > 1){  setQuantity(prev => prev - 1)}}


    const addCart = async () => {

      if(!user){
        alert("Please loign to add cart.")
        return
      }
  
       const cartItemRef = doc(db,'carts', `${user.uid}_${product.id}`)
       const docSnap = await getDoc(cartItemRef)


       if(docSnap.exists()){
        await updateDoc(cartItemRef,{quantity : docSnap.data().quantity + quantity})

       } else{
           await setDoc(cartItemRef,{
            uid: user.uid,
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity : quantity
           })


       }
       alert('product added to cart!')


    }
    


    if(!product) return <div className='text-[5rem]'> loading....... </div>

  return (
      <div>
    <div className='product flex justify-center max-lg:flex-wrap gap-10 py-10'>

    <div className='flex justify-center md:justify-end items-center lg:w-[50%] max-md:flex-wrap max-md:flex-col-reverse '>
         <div className="photos photos1 flex md:flex-col  ">
            <img src={product.images[0]} alt="" />
            <img src={product.images[1]} alt="" />
            <img src={product.images[2]} alt="" />
         </div>
         <div className="photos photos2">
             <img src={product.images[0]} alt="" />
         </div>
    </div>

{/* ........................................... */}

    <div className='flex flex-col gap-2 py-8  lg:w-[50%] max-lg:pl-[2%] pr-[2%]'>
       <b className='text-[2rem]'>{product.name}</b>
       <h2 className='text-[1.5rem] text-gray '>Categorey : {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h2>
       <h1 className='text-[2rem] text-price '>Price: {product.price} $</h1>
       <p className='text-[1.2rem] text-gray-600 font-sans! mb-5'>{product.description}</p>

       <div className="addcart flex gap-4 ">
        <div className='flex gap-4 items-center bg-gray px-4 rounded-[10px] '>
        <button className='add' onClick={increase}>+</button>
        <p className='flex items-center text-[2rem] '>{quantity}</p>
        <button  className='add' onClick={decrease}>-</button>
        </div>

        <div>
            <button onClick={addCart} className='border-1 bg-black text-white text-[1.5rem] rounded-[35px] px-[2rem] py-[0.4rem] cursor-pointer'>ADD CART</button>
        </div>
       </div> {/* addcart end here....*/}


    </div>
    

    </div>

      <Review/>
    </div>
  )
}

export default Product
