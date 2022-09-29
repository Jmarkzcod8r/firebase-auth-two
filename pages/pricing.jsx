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
import '../styles/pricing.module.css'


export default function pricing  (){
  return (
    <div>
      <Usernav/>
         {/* <div className="flex bg-red-100 z-1000 relative"> Pricing </div> */}
         <div className="grid z-1000 absolute w-screen h-1/2 top-18 "> 
                <div className="relative w-1/2 bg-white bg-opacity-70 backdrop-blur-lg 
                           justify-self-center rounded drop-shadow-lg p-4 text-center" >
{/* -------------------------------------- */}
{/* <div> </div> */}
{/* <div id="pricing-table" class="clear">
    <div class="plan">
        <h3>Enterprise<span>$59</span></h3>
        <a class="signup" href="">Sign up</a>         
        <ul>
            <li><b>10GB</b> Disk Space</li>
            <li><b>100GB</b> Monthly Bandwidth</li>
            <li><b>20</b> Email Accounts</li>
			<li><b>Unlimited</b> subdomains</li>			
        </ul> 
    </div>
    <div class="plan" id="most-popular">
        <h3>Professional<span>$29</span></h3>
        <a class="signup" href="">Sign up</a>        
        <ul>
            <li><b>5GB</b> Disk Space</li>
            <li><b>50GB</b> Monthly Bandwidth</li>
            <li><b>10</b> Email Accounts</li>
			<li><b>Unlimited</b> subdomains</li>			
        </ul>    
    </div>
    <div class="plan">
        <h3>Standard<span>$17</span></h3>
		<a class="signup" href="">Sign up</a>
        <ul>
            <li><b>3GB</b> Disk Space</li>
            <li><b>25GB</b> Monthly Bandwidth</li>
            <li><b>5</b> Email Accounts</li>
			<li><b>Unlimited</b> subdomains</li>			
        </ul>
    </div>
    <div class="plan">
        <h3>Basic<span>$9</span></h3>
        <a class="signup" href="">Sign up</a>		
        <ul>
            <li><b>1GB</b> Disk Space</li>
            <li><b>10GB</b> Monthly Bandwidth</li>
            <li><b>2</b> Email Accounts</li>
			<li><b>Unlimited</b> subdomains</li>			
        </ul>
    </div> 	
</div> */}
{/* ------------------------------------- */}

                </div>
          </div>
    </div>
 

  )
}


