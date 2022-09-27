/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import {React , useEffect, useState}from 'react'
// import { checkuserAccessToken} from '../functions global/fetchDetails'
// import { CheckToken } from "../functions global/fetchDetails";
import {IoLogOut} from 'react-icons/io5'
import { Getuserinfo } from "../functions global/Getuserinfo";
import styles from '../styles/Index.module.css'
import Image from "next/image";


export default function Index  (){

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  //user is initially an empty object '{}'
  const [user, setUser] = useState({})
  
  // window.location.href="/login"
  const router = useRouter();
  const [checkbrowser, setCheckbowser]= useState('')
  const [tokenres, setTokenres]=useState('')
  const [photoURL, setPhotoURL]=useState('')
  // const gotologin =()=>{  router.push("/login") }
  // localStorage.getItem('accessToken')
  // console.log(token)
  
  // console.log(localStorage.getItem('accesToken'))
  // const getlocalstorage =async (key)=> {
  //   setEmail(localStorage.getItem(key));
  // };
  // getlocalstorage('email');
  // const h = localStorage.getItem('email')

  // CheckToken();
  const CheckToken = async () => {
    // const router = useRouter();
    // const tok = await{
    const token = await JSON.parse(localStorage.getItem('accessToken'));
    // const {user} = await JSON.parse(localStorage.getItem('user'));
    const stringtoken = JSON.stringify(token);
    // const userdata = JSON.stringify(user);
    // setUser(userdata);

    // const indexemail = (localStorage.getItem('accessToken'));
    // setEmail(indexemail);
    // console.log(stringtoken);
    // console.log(typeof(token));
    // const checkpage = ()=>{
    if (token){
      // console.log('okay')
        setTokenres('okay')
    } else {
      setTokenres('not okay')
      // console.log(
      // 'not okay, redirecting to the login page');
      router.push("/login");
    }; };
    // checkpage();
    // Setme();
  // };
  // const myphoto = toString(user.photoURL)

  function Checkbrowser(){
    try{
  if (typeof window !== 'undefined'){
    setCheckbowser('You are on the browser')
    // console.log()
  } else {
    setCheckbowser('You are on the server')
  }
  } catch{
    console.log('error')
  }
  }
  // CheckToken();

  useEffect(()=>{

      CheckToken();
      // console.log(user.photoURL);
      // 
    // 
    // const CheckToken = () => {
    //   // const router = useRouter();
    //   const token = (localStorage.getItem('accessToken'));
    //   const stringtoken = JSON.stringify(token)
  
    //   // const indexemail = (localStorage.getItem('accessToken'));
    //   // setEmail(indexemail);
    //   console.log(stringtoken);
    //   console.log(typeof(token));
    //   // const checkpage = ()=>{
    //   if (token){
    //     console.log('okay')
    //   } else {
    //     console.log(
    //     'not okay, redirecting to the login page');
    //     router.push("/login");
    //   }; };

    //   CheckToken();






    // CheckToken();
      // Checkbrowser();
  //     function Setme(){ setEmail(localStorage.getItem('email'))};
  // Setme();
  //     function SetmeName()
  //         {setName(localStorage.getItem('name')) };
  //   SetmeName();
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
    // console.log([user])
    console.log('hey')
  }
 



  const signOut = () => {
    localStorage.clear();
    router.push("/login")
    console.log('ok')
  }


  return (
    <div className='z-0  w-screen h-screen block justify-center bg-white      
            pt-5 relative'>
      
   
    {/* <Image 
    loader = {imageloader}
    // className='absolute top-0 left-0 w-screen h-screen object-cover'
    scr="as" alt="sa"  width={500} height={500}/>   */}
    <img
      className='absolute top-0 left-0 w-screen h-screen object-cover' 
      src={"https://cdn.pixabay.com/photo/2016/05/26/12/56/waterfalls-1417102_1280.jpg"} 
      alt='as'  />
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10'></div>
        
<div className="p-6">

<div className=" bg-green-700 h-1/4 grid border-black">
  {/* <div className="bg-pink-600 flex"> */}
<img src={photoURL} alt="photome" className="absolute mt-5 ml-10"/>
      <div className="relative flex justify-around h-20 px-96 z-100  mt-10">
     
      <button onClick={Printuser} className=" bg-blue-50 inline-block h-9"> Profile</button>
      <button className=" bg-blue-50 inline-block h-9"> About</button>
      <button className=" bg-blue-50 inline-block h-9"> Pricing</button>
      <button className=" bg-blue-50 inline-block h-9"> Cart</button>
      <button className=" bg-blue-50 inline-block h-9"> Payment</button>
      </div>
      <button className="self-center justify-self-end absolute bg-blue-200 
        m-16 mt-17" onClick={signOut}>Sign Out</button>
        {/* </div> */}
      </div>
      </div>
      <div className="relative bg-pink-300 inline-block m-4 border-4">
      <div>
     <h1> Email: {user.email}</h1>
     </div>
      <div>
      <h1> Name: {user.displayName}</h1>
      </div>
      {/* <div>
      <h1> Name: {user.photoURL}</h1>
      </div> */}
      {/* <div>
      <h1> This is browser Check: {name}</h1>
      </div> */}
      <div>
      <h1> Browser: {checkbrowser}</h1>
      </div>
      {/* <div>
      <h1> This is Token response: {tokenres}</h1>
      </div> */}
      {/* <button onClick={Checkbrowser}>Checks Browser</button> 
      <button onClick={printuser}>Check Browser</button> */}
    </div>
{/* <div>asdasd</div>
<div>asdasd</div> */}
{/* <div className="flex">das</div> */}
{/* <div class={styles.bgdeco}></div> */}
{/* <div> </div> */}
{/* <div class={styles.bgdeco}></div> */}
{/* <div> </div> */}
{/* <div class={styles.bgdeco}></div> */}
{/* <div> </div> */}
{/* <div class={styles.bgdeco}></div> */}

    {/* <div className='relative w-50 h-50 z-100 m-20' >
   
    </div>
    
   
   
   
    <div className="w-screen h-screen bg-slate-600 justify-center items-center ">
      <div className="w-1/3 h-auto p-4 bg-white shadow-md rounded-md justify-start 
          items-center relative">
      <IoLogOut fontSize={25} className="absolute top-3 right-3 cursor-pointer
                  text-gray-600 " onClick={signOut}/>
         <img src={user.photoURL} alt="photo"/>
        </div> */}
       
   
    {/* {/* </div> */}
        {/* <div>{user.photoURL}</div> */}
    </div>
    // </div>
    
  )
}


