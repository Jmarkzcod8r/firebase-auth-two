/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import {React , useEffect, useState}from 'react'
// import { checkuserAccessToken} from '../functions global/fetchDetails'
// import { CheckToken } from "../functions global/fetchDetails";
import {IoLogOut} from 'react-icons/io5'
import { Getuserinfo } from "../functions global/Getuserinfo";
// import styles from '../styles/Index.module.css'
import Image from "next/image";
import Usernav from "./Components/Usernav";


export default function Index  (){


  return (
   <div>
    
    <Usernav/>
    <div className="flex  z-1000 absolute w-screen h-96 top-18 bg-red-200  "> 
                <div className=" w-1/4 relative h-auto bg-pink-700 flex flex-col  content-center items-center   ">
                  <button className="h-14  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105"> Add ENtry

                  </button>
                  <div className=' bg-green-700 mt-5 w-[90%] block h-[75%] px-2 overflow-auto'> 
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                     
                     
                  
                   </div>
                </div>

                <div className="w-1/2 relative flex bg-white bg-opacity-70 backdrop-blur-lg 
                            rounded drop-shadow-lg p-4 justify-center">asd


                </div>
                <div className='w-1/4 flex bg-red-900'></div>
          </div>
   </div>
  )
}


