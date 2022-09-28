import { useRouter } from "next/router"
import {React , useEffect, useState}from 'react'
// import { checkuserAccessToken} from '../functions global/fetchDetails'
// import { CheckToken } from "../functions global/fetchDetails";
import {IoLogOut} from 'react-icons/io5'
import { Getuserinfo } from "../../functions global/Getuserinfo"
// import styles from '../styles/Usernav.module.css'
import Image from "next/image";


export default function Usernav  (){

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  //user is initially an empty object '{}'
  const [user, setUser] = useState({})
  
 
  const router = useRouter();
  const [checkbrowser, setCheckbowser]= useState('')
  const [tokenres, setTokenres]=useState('')
  const [photoURL, setPhotoURL]=useState('')
 
  const CheckToken = async () => {
   
    const token = await JSON.parse(localStorage.getItem('accessToken'));
  
    const stringtoken = JSON.stringify(token);
  
    if (token){
    
        setTokenres('okay')
    } else {
      setTokenres('not okay')
    
      router.push("/login");
    }; };
  

  function Checkbrowser(){
    try{
  if (typeof window !== 'undefined'){
    setCheckbowser('You are on the browser')
 
  } else {
    setCheckbowser('You are on the server')
  }
  } catch{
    console.log('error')
  }
  }

  const GotoProfile =()=>{
    router.push("/profile");
  }
  const GotoAbout =()=>{
    router.push("/about");
  }
  const GotoPricing =()=>{
    router.push("/pricing");
  }
  const GotoCart =()=>{
    router.push("/cart");
  }
  const GotoPayment =()=>{
    router.push("/payment");
  }
  

  useEffect(()=>{

      CheckToken();
  
    const setinfo = async() =>{
      try{
      const [userInfo] = await Getuserinfo();
            setUser(userInfo);
      } catch {
        console.log('error')
      } };

      Checkbrowser();
            setinfo();

   const Setmephoto = ()=> setPhotoURL(user.photoURL);
   Setmephoto();
          }, );
  
  const Printuser =()=> {
  
    console.log('hey')
  }
 



  const signOut = () => {
    localStorage.clear();
    router.push("/login")
    console.log('ok')
  }


  return (
    <div className='z-0  w-screen h-auto block justify-center bg-white      
            pt-5 relative'>
      
   

    {/* <img
      className='absolute top-0 left-0 w-screen h-screen object-cover' 
      src={"https://cdn.pixabay.com/photo/2016/05/26/12/56/waterfalls-1417102_1280.jpg"} 
      alt=' '  />
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10'></div> */}
        
<div className="p-6">

<div className=" bg-green-700 h-1/4 grid border-black">

<img src={photoURL} alt="photome" className="absolute mt-5 ml-10"/>
      <div className="relative flex justify-around h-20 px-96 z-100  mt-10">
     
      <button onClick={GotoProfile} className=" bg-blue-50 inline-block h-9 p-2 rounded-full"> Profile</button>
      <button onClick={GotoAbout} className=" bg-blue-50 inline-block h-9 p-2 rounded-full"> About</button>
      <button onClick={GotoPricing} className=" bg-blue-50 inline-block h-9 p-2 rounded-full"> Pricing</button>
      <button onClick={GotoCart} className=" bg-blue-50 inline-block h-9 p-2 rounded-full"> Cart</button>
      <button onClick={GotoPayment}  className=" bg-blue-50 inline-block h-9 p-2 rounded-full"> Payment</button>
      </div>
      <button className="self-center justify-self-end absolute bg-blue-200 
        m-16 mt-17" onClick={signOut}>Sign Out</button>
        
      </div>
      </div>
      <div className="absolute bg-pink-300 inline-block m-4 border-4">
      <div>
     <h1> Email: {user.email}</h1>
     </div>
      <div>
      <h1> Name: {user.displayName}</h1>
      </div>
      <div>
      <h1> photo: {photoURL}</h1>
      </div>
     
      <div>
      <h1> Browser: {checkbrowser}</h1>
      </div>
  
    </div>
         {/* <div className="flex bg-red-100 z-1000 relative"> Payment </div> */}
    </div>
 
    
  )
}

