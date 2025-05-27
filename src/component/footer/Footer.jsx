import './footer.css'


import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className= 'footer flex flex-col items-center gap-10 p-5 py-10 bg-white2'>

      <div className="footerContainer1 w-[95%] md:w-[80%] text-center flex max-md:flex-col p-4 items-center justify-around bg-black text-white2 rounded-2xl ">

        <div>
            <b className='text-[3rem]'>STAY UPTO DATE ABOUT<br></br> OUR LATEST OFFERS</b>
        </div>
        <div>
            <div className="input border-none bg-white relative  w-[260px] px-8 rounded-2xl my-3 overflow-hidden">
                <input className='  w-full h-full py-2 px-3 outline-none text-black' type='email' placeholder='Enter your email addres' />
                 <TfiEmail className='absolute text-black top-1/2  transform -translate-1/2 left-5'/>
            </div>
            <input className='cursor-pointer border-none bg-white text-black py-2.5 px-12 font-medium rounded-2xl' type="submit" value="Subscribe now Newsletter"  />
        </div>

      </div> {/*footer container 1 end here...............*/}



      <div className="footerContainer2 w-full flex justify-around gap-10 flex-wrap">
        <div className="grid gap-3">
            <b className="bold text-[2rem]" >Shop.co</b>
            <p className="text-[14px] text-textGray">we have that suits style and<br></br> which you're proud to wear. From<br></br> women to men</p>
            <span className='flex gap-3 text-[1.8rem] '>
                <FaFacebook className='i'/> <FaTwitter  className='i'/> <FaInstagram  className='i'/> <FaGithub  className='i'/> 
           </span>
        </div>

        <div className='grid'>
         <h2>COMPANY</h2>
         <ul>
           <li><Link>About</Link></li>
           <li><Link>Features</Link></li>
           <li><Link>Works</Link></li>
           <li><Link>Career</Link></li>
        </ul>
        </div>

        <div>
             <h2>Help</h2>
         <ul>
           <li><Link>Custmer</Link></li>
           <li><Link>Delivery Details</Link></li>
           <li><Link>Terms & Conditions</Link></li>
           <li><Link>Privacy Policy</Link></li>
        </ul>
        </div>

        <div>
             <h2>FAQ</h2>
         <ul>
           <li><Link>Account</Link></li>
           <li><Link>Manage Deliveries</Link></li>
           <li><Link>Orders</Link></li>
           <li><Link>Payments</Link></li>
        </ul>
        </div>

        <div>
             <h2>RESOURCES</h2>
         <ul>
           <li><Link>Free eBooks</Link></li>
           <li><Link>Development Tutorial</Link></li>
           <li><Link>How to -Blog</Link></li>
           <li><Link>YOutube Playlist</Link></li>
        </ul>
        </div>
           
      </div>{/*footer container 2...................*/}

    </div>
  )
}

export default Footer
