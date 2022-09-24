import { useRouter } from "next/router"
import {React , useEffect, useState}from 'react'
// import { checkuserAccessToken} from '../functions global/fetchDetails'
// import { CheckToken } from "../functions global/fetchDetails";
import {IoLogOut} from 'react-icons/io5'
import { Getuserinfo } from "../functions global/Getuserinfo";


export default function Index  (){

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  //user is initially an empty object '{}'
  const [user, setUser] = useState({})
  // window.location.href="/login"
  const router = useRouter();
  const [checkbrowser, setCheckbowser]= useState('')
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
  const CheckToken = () => {
    const router = useRouter();
    const token = (localStorage.getItem('accessToken'));
    const stringtoken = JSON.stringify(token)

    const indexemail = (localStorage.getItem('accessToken'));
    // setEmail(indexemail);
    console.log(stringtoken);
    console.log(typeof(token));
    if (token){
      console.log('okay')
    } else {
      console.log(
      'not okay, redirecting to the login page');
      router.push("/login");
    };
    // Setme();
  };

  // CheckToken();
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
  // Checkbrowser()
  // Checkbrowser();

  useEffect(()=>{
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


            setinfo();
          Checkbrowser();
          } )
  
  const printuser =()=> {
    console.log([user])
  }
 



  const signOut = () => {
    localStorage.clear();
    router.push("/login")
  }


  return (
    <div className='z-0  w-screen h-screen flex justify-center items-center bg-white relative'>
    {/* <Image 
    loader = {imageloader}
    // className='absolute top-0 left-0 w-screen h-screen object-cover'
    scr="as" alt="sa"  width={500} height={500}/>   */}
    <img
      className='absolute top-0 left-0 w-screen h-screen object-cover' 
      src={"https://cdn.pixabay.com/photo/2016/05/26/12/56/waterfalls-1417102_1280.jpg"} 
      alt='as'  />
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50'></div>
    <div className="w-screen h-screen bg-slate-600 justify-center items-center ">
      <div className="w-1/3 h-auto p-4 bg-white shadow-md rounded-md justify-start 
          items-center relative">
      <IoLogOut fontSize={25} className="absolute top-3 right-3 cursor-pointer
                  text-gray-600 " onClick={signOut}/>
         <img src={user.photoURL} alt="photo"/>
        </div>
       
    <div className="relative">
      <div>
     <h1> This is email: {user.email}</h1>
     </div>
      <div>
      <h1> This is name: {user.displayName}</h1>
      </div>
      <div>
      {/* <h1> This is browser Check: {name}</h1> */}
      </div>
      <div>
      <h1> This is browser Check: {checkbrowser}</h1>
      </div>
      <button onClick={Checkbrowser}>Checks Browser</button>
      <button onClick={printuser}>Check Browser</button>
    </div>
    </div>

    </div>
    
  )
}


