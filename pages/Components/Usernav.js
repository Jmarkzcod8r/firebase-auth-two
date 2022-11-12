import { useRouter } from "next/router"
import {React , useEffect, useState}from 'react'
// import { checkuserAccessToken} from '../functions global/fetchDetails'
// import { CheckToken } from "../functions global/fetchDetails";
import {IoLogOut} from 'react-icons/io5'
import { Getuserinfo } from "../../functions global/Getuserinfo"
// import styles from '../styles/Usernav.module.css'
import Image from "next/image";
import Feedback  from '../Icons/feedback.png';
import Swal from "sweetalert2";


export const ForphotoURL =async ()=>{
  const [userInfo] = await Getuserinfo();
  setUser(userInfo);
  setPhotoURL(user.photoURL)
  // return userInfo.photoURL
}

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
  
    // const stringtoken = JSON.stringify(token);
  
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

  const GotoHome = () => {
    router.push("/")
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

   const Setmephoto = ()=> {setPhotoURL(user.photoURL) };
   Setmephoto()
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[user.photoURL] );
  
  const Printuser =()=> {
  
    console.log('hey')
  }
 



  const signOut = () => {
    localStorage.clear();
    router.push("/login")
    console.log('ok')
  }

  const Swalfeed =()=>{
    Swal.fire({
      title: "Feedbox!",
      text: "Suggesstion, Comments and Recommendations are very much appreciated",
      input: 'textarea',
      showCancelButton: true        
  }).then(async (result) => {
      if (result.value) {
        console.log('this is result:',result);
        try {      
          const data = await axios.post(thisbasez+"/clients/feedback", {feedback:(result.value), date, credemail}, {
            headers: {'Content-Type': 'application/json',  } }) ;
            console.log('data:',data.data.status);
            Swal.fire({
              title:'Status:',
              text:data.data.status,
            })

                } 
          
        catch (error) {console.error};
            // getData();  
            // alert('Blank Entry Created');
      
        // const Testfunction = async(e) => {
        //   e.preventDefault();
        //   try {      
        //     await axios.post(thisbasez+"/clients/feedback", {feedback:{result.value}, date, credemail}, {
        //       headers: {'Content-Type': 'application/json',  } }) ;
        //           } 
        //   catch (error) {console.error(error.response.data);};
        //       getData();  alert('Blank Entry Created');
        // const Testfunction = async(e,result.value);
        // Testfunction()
        // setFeedback(result.value)
        //   console.log("Result: " + result.value);
      }
  });
  }

  return (
    <div className='z-0 flex justify-end p-1 relative h-auto '>
    {/* <div className="p-2 mr-8 bg-blue-300 bg-opacity-40 rounded-full mt-2 mb-0 hover:scale-110 hover:bg-blue-400"> */}
    {/* <button className=" drop-shadow-lg flex" onClick={Swalfeed}>
   
      <p>&nbsp; Send
       Feedback &nbsp;</p>
       <Image src={Feedback} alt="Clear" width={40} height={40} className="hover:scale-110"/>
       </button> */}

      <div className="relative  bg-white bg-opacity-70 backdrop-blur-lg 
                        h-36   justify-self-center rounded drop-shadow-lg p-3 hidden">
  

<img src={photoURL} alt="photome" className="absolute mt-5 ml-10 rounded-full"/>
      <div className="relative w-[100%] flex justify-around bg-opacity-70  px-96 z-100 h-full pt-10  ">
     
      <button onClick={GotoHome} className=" bg-blue-50 inline-block h-9 p-2 rounded-full mx-7"> Home</button>
      <button onClick={GotoProfile} className=" bg-blue-50 inline-block h-9 p-2 rounded-full mx-7"> Profile </button>
      <button onClick={GotoAbout} className=" bg-blue-50 inline-block h-9 p-2 rounded-full mx-7"> About</button>
      {/* <button onClick={GotoCart} className=" bg-blue-50 inline-block h-9 p-2 rounded-full mx-7"> Cart</button>
      <button onClick={GotoPayment}  className=" bg-blue-50 inline-block h-9 p-2 rounded-full mx-7"> Payment</button> */}
      {/* <div className="flex"></div> */}
      
      </div>
      <button className="self-center justify-self-end  absolute bg-blue-200 
        m-16 mt-10 right-0 p-2 rounded-full" onClick={signOut}>Sign Out</button>
        
      {/* </div> */}



      {/* </div>
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
      </div> */}
  
    </div>
         {/* <div className="flex bg-red-100 z-1000 relative"> Payment </div> */}
    </div>
 
    
  )
}

