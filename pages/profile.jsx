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
import Add from './Icons/Add.svg'

export default function profile  (){
  return (
    <div>
      <Usernav/>
       <Image src={Add} alt="Add" width={40} height={40}/>
    </div>
 

  )
}
