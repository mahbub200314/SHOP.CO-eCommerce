import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider"
import { collection, doc, getDocs, query, QuerySnapshot, where ,deleteDoc } from "firebase/firestore"
import { db } from "../../../public/firebase"


const Cart = () => {
  
  const {user} = useContext(AuthContext)
  const [cart, setCart] = useState([])
  const [loading, setLoading]= useState(true)

  useEffect(()=>{

      if(!user)return;
   

      const cartRef = collection(db, 'carts')
      const q = query(cartRef, where('uid', "==", user.uid))

      getDocs(q)
      .then((QuerySnapshot)=>{
        const items = QuerySnapshot.docs.map(doc => ({
          id:doc.id,
          ...doc.data()
        }))
       
        setCart(items)
        setLoading(false)
      })

      .catch((error)=>{
        console.log('error : ' , error)
      })

      

  },[user])

const removeFuncton =async (itemId) => {
  const confirm = window.confirm("Are you sure you want to remove this item?")
  if (!confirm) return

  try {
    await deleteDoc(doc(db, "carts", itemId))
    // Remove from UI
    setCart(prev => prev.filter(item => item.id !== itemId))
  } catch (error) {
    console.error("Error removing item:", error)
  }
}

const totalPrice = parseFloat(
   cart.reduce((acc, item)=>{
  return acc + item.price * item.quantity
},0).toFixed(3)
)

  
  if (loading) return <p className="text-center py-10">Loading cart...</p>
  if (cart.length === 0) return <p className="text-center py-10 text-red-500">Your cart is empty!</p>


  return (
    <div>
        <div className='p-5 text-center'>
      <h1 className='text-[2rem] font-bold mb-5 underline'>🛒 Your Cart</h1>

         <b className="block my-[30px] text-2xl text-red-600 underline underline-offset-2">All Product Price : {totalPrice}</b>
             
      <div className=' w-fit flex flex-wrap justify-center gap-2'>
        {cart.map(item => (
          <div key={item.id} className='flex items-center  border rounded-lg p-4 shadow-md bg-white'>
            <img src={item.photo || item.image} alt={item.name} className='w-[100px] h-[120px] object-cover rounded-md mb-2' />
            <div>
             <h2 className='text-xl font-semibold'>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={()=>removeFuncton(item.id)} className="border-1 text-red-700 px-4 rounded-[5px] mt-2 hover:border-black hover:text-black cursor-pointer">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Cart
