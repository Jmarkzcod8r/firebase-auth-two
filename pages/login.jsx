import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FcGoogle} from 'react-icons/fc'
import {getAuth , GoogleAuthProvider, signInWithPopup , } from 'firebase/auth'
import { apptry } from '../firebase/firebase-config'
import { useRouter } from 'next/router'
import {AiOutlineMail} from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io5'
import { AiFillFacebook } from 'react-icons/ai'


export default function Login () {

  const firebaseAuth = getAuth(apptry);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  // using useState since it is global inside this page
  // useState is like the big brother of 'useEffect'. This is better if he is around.
  const [email, setEmail] = useState('')

  const signIn = async () => {
    // 'signInWithPopup(firebaseAuth, provider)' returns an object of data about user
    // const response = await signInWithPopup(firebaseAuth, provider)
    // response is an 'object' with four keys: "user","providerId","_tokenResponse","operationType"
    // console.log(response)
    try{
    const {user}= await signInWithPopup(firebaseAuth, provider)
    console.log('user is a',typeof(user));
    // console.log(user);
  
    // This method is similar to a query in a dictionary.
    const {refreshToken, providerData, email} = user;

    // console.log('this is token:',refreshToken)
    // console.log('data is:',providerData)

    localStorage.setItem('email', JSON.stringify(email))
    // setEmail(localStorage.getItem('email'))
    
    
    localStorage.setItem('user', JSON.stringify(providerData))
    // If the user's browser has this token, no need to login else 'login needed'
    localStorage.setItem('accessToken', JSON.stringify(refreshToken))

    router.push("/");
  } catch {
    console.log(' ')
  }
  };

  const Gotonative = () => {
    router.push("/loginnative")
  }

  const imageloader=()=>{
    return (
      'https://cdn.pixabay.com/photo/2020/04/23/18/41/light-5083606_1280.jpg'
    )
  };

  useEffect(()=>{
    console.log('ads');
     setEmail(localStorage.getItem('email'))
  }, [email])

    // function Changelocalstorageemail(){
    //   const email='macnificent_007@yahoo.com'
    //   localStorage.setItem('email',email)
    // }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-white relative'>
      {/* <Image 
      loader = {imageloader}
      // className='absolute top-0 left-0 w-screen h-screen object-cover'
      scr="as" alt="sa"  width={500} height={500}/>   */}
      <img
        className='absolute top-0 left-0 w-screen h-screen object-cover' 
        src={"https://cdn.pixabay.com/photo/2018/05/12/19/20/freiberg-3394376_1280.jpg"} 
        alt='as'  />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50'></div>
      
      <div className='z-10 flex justify-center intems-center border border-gray-300 rounded-full
        w-60  m-2  p-2 bg-white bg-opacity-60 cursor-pointer hover:shadow-md hover:bg-opacity-100     '
      onClick={signIn}
      >
        <FcGoogle fontSize={30}/>
        <p className='test-lg font-semibold ml-4'>Sign in with Google</p>
      </div>

      <div className='z-10 flex justify-center intems-center border border-gray-300 rounded-full
        w-60 m-2    p-2 bg-white bg-opacity-60 cursor-pointer hover:shadow-md hover:bg-opacity-100     '
      onClick={signIn}
      >
        <IoLogoFacebook fontSize={30} className='bg-blue-400 rounded-full'/>
        <p className='test-lg font-semibold ml-4'>Sign in with Facebook</p>
      </div>

      <div className='z-10 flex justify-center intems-center border border-gray-300 rounded-full
         m-2  w-60  p-2 bg-white bg-opacity-60 cursor-pointer hover:shadow-md hover:bg-opacity-100     '
      onClick={signIn}
      >
        <AiFillFacebook fontSize={30} className='bg-blue-900'/>
        <p className='test-lg font-semibold ml-4'>Sign in with Yahoo</p>
      </div>

      <div className='z-10 flex justify-center intems-center border border-gray-300 rounded-full
         m-2 w-60   p-2 bg-white bg-opacity-60 cursor-pointer hover:shadow-md hover:bg-opacity-100     '
      onClick={Gotonative}
      >
        <AiOutlineMail fontSize={30} className='justify-self-start'/>
        <p className='test-lg font-semibold ml-4'>Sign in with Email</p>
      </div>
    
    </div>
  )
}


