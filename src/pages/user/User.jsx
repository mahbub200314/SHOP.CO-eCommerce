import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import Cart from '../cart/Cart'
import { getAuth, signOut } from 'firebase/auth'

const User = () => {

  const {user, loading}= useContext(AuthContext)

  const auth = getAuth()
 
  const UserSignout = ()=>{
    signOut(auth )
    .then(() => {
      alert('Succesfully signed out.')
    })
    .catch(error => console.error("sign out error : ", error))
  }

  
  if (loading) return <p className="text-center text-gray-500 py-10">Loading user data...</p>
  if (!user) return <p className="text-center text-red-500 py-10">No user logged in.</p>
console.log(user)
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-5 overflow-x-hidden'>
      
      <div className='user-info  border-b-2  w-fit flex flex-col  text-right justify-center items-center gap-2  py-4 px-10'>

          <div className="img w-fit">
            <img className='rounded-full w-[100px] h-[100px]'
            src={user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbZHvsyM8U3XFC0pNFenrXXBuVSkWU5GUTg&s'}
            onError={(e) => { e.currentTarget.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbZHvsyM8U3XFC0pNFenrXXBuVSkWU5GUTg&s' }} 
            alt="User-Img" />
          </div>

          <div className=' text-start px-4'>
          <b className='text-[1.4rem]'>Name : {user.displayName}</b>
          <p>Email : {user.email}</p>
          <p>Account Created : {user.metadata.creationTime}</p>
          </div>
          <button onClick={UserSignout} className='bg-white px-6 rounded-[5px] py-1 shadow-lg text-[1.2rem] cursor-pointer hover:drop-shadow-2xl hover:-shadow-md hover:text-price'>Sign Out</button>
      </div> {/*...user info....*/}


      <div>

         <Cart/>

      </div>


    </div>
  )
}

export default User
