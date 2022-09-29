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


export default function cart  (){
  return(
    <div>
      <Usernav/>
       {/* <div className="flex bg-red-100 z-1000 relative"> Cart </div> */}
       <div className="grid z-1000 absolute w-screen h-1/2 top-18 "> 
                <div className="relative w-1/2 bg-white bg-opacity-70 backdrop-blur-lg 
                           justify-self-center rounded drop-shadow-lg p-4">

                </div>
          </div>
  </div>
    
  )
}


