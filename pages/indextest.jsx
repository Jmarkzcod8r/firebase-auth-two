/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import {React , useEffect, useState}from 'react'
// import { checkuserAccessToken} from '../functions global/fetchDetails'
// import { CheckToken } from "../functions global/fetchDetails";
import {IoLogOut} from 'react-icons/io5'
import { Getuserinfo } from "../functions global/Getuserinfo";
import styles from '../styles/Usernav.module.css'
import Image from "next/image";
import Usernav from "./Components/Usernav";


export default function Index  (){
  return (
    <Usernav/>
  )
}

  