import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FcGoogle} from 'react-icons/fc'
import {getAuth , GoogleAuthProvider, signInWithPopup , onAuthStateChanged} from 'firebase/auth'
import { apptry } from '../firebase/firebase-config'
import { useRouter } from 'next/router'
import {db} from '../firebase/firebase-config'
import {doc , setDoc} from "firebase/firestore"
// import { getAuth ,  from "firebase/auth"
import {AiOutlineMail} from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io5'
import { AiFillFacebook } from 'react-icons/ai'

import { thisbase } from "../functions global/thisbase";

import axios from "axios";

import Bgpic from "./Icons/Bgpic.jpg";
import DevJourn from "./Icons/DevJourn2nobg2.png";

export default function Login () {

  var thisbasez = thisbase();
  const api = axios.create({
    // baseURL: "https://firebase-auth-two-new-jmarkzcod8r.vercel.app/api",
    baseURL: thisbasez,
  });


  const firebaseAuth = getAuth(apptry);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  // using useState since it is global inside this page
  // useState is like the big brother of 'useEffect'. This is better if he is around.
  const [email, setEmail] = useState('')
  const [credemail, setCredemail] = useState("");



  const signIn = async () => {
    // 'signInWithPopup(firebaseAuth, provider)' returns an object of data about user
    // const response = await signInWithPopup(firebaseAuth, provider)
    // response is an 'object' with four keys: "user","providerId","_tokenResponse","operationType"
    // console.log(response)





    try{
    const {user}= await signInWithPopup(firebaseAuth, provider)
    // console.log('user is a',typeof(user));
    // console.log(user);

    // This method is similar to a query in a dictionary.
    const {refreshToken, providerData, email} = user;

    async function Go(){
    if (user) {
      // const uid = user.uid;
      console.log('user okay');
      // console.log('this is user', uid);
      // await setDoc(doc(db, "Firebase-test userz", uid), {
      //     displayName: user.displayName,
      //     email: user.email,
      //     photoURL: user.photoURL,
      //     emailVerified: user.emailVerified
      // }
      // );

    } }
    Go().then(router.push('/'))



    // console.log('this is token:',refreshToken)
    // console.log('data is:',providerData)

    localStorage.setItem('email', JSON.stringify(email));
    // setEmail(localStorage.getItem('email'))


    localStorage.setItem('user', JSON.stringify(providerData));
    // If the user's browser has this token, no need to login else 'login needed'
    localStorage.setItem('accessToken', JSON.stringify(refreshToken));


      Dbadd();




    // router.push("/");
  } catch {
    console.log(' ')
  }
  };

  const Gotonative = () => {
    router.push("/loginnative")
  }

  async function Dbadd(){
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        console.log('this is user', uid);
        await setDoc(doc(db, "Firebase-test users", uid), {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        });

      } else {
      console.log('error');
      }
            });
                console.log('sendingss');
              };

  const imageloader=()=>{
    return (
      'https://cdn.pixabay.com/photo/2020/04/23/18/41/light-5083606_1280.jpg'
    )
  };

  async function getData() {
    console.log('getting data')
    const data = await api.get(`/clients/${credemail}`);
    const clientslist = data.data.clients;

    setMainlist(clientslist.reverse());

    const juneDates = clientslist
      .map((client) => client.date)
      .filter((date) => date.includes('Jun-'))
      .map((date) => parseInt(date.substring(0, 2)))
      .reverse();

    console.log('hi', juneDates);
    setJune(juneDates);
    localStorage.setItem('JuneDates', JSON.stringify(juneDates));
  }

  useEffect(()=>{
    const storedJuneDates = localStorage.getItem('JuneDates');
    if (storedJuneDates) {
      const parsedJuneDates = JSON.parse(storedJuneDates);
      console.log('JuneDates:', parsedJuneDates);
      setJune(parsedJuneDates);
    } else {
      getData();
    }

    setEmail(localStorage.getItem('email'))
  }, [email])

    // function Changelocalstorageemail(){
    //   const email='macnificent_007@yahoo.com'
    //   localStorage.setItem('email',email)
    // }
  return (
    <div className='h-auto w-auto flex flex-col justify-center items-center bg-blue-300 relative'>

      <div className='absolute  z-10 hidden sm:block
                sm:left-[-30px] md:left-[50px]
      scale-[50%] sm:scale-[70%] md:scale-90    lg:scale-100
      top-[200px]     sm:top-[300px] md:top-[400px] lg:top-[500px] xl:top-[600px] 2xl:top-[700px]
      '>
  <Image
    className='  '
    src={DevJourn}
    alt=''
    // fill
    // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
    // layout='responsive'
    width={500}
    height={100}
  />
        </div>

      <Image
        className='relative top-0 left-0 h-screen'
        src={Bgpic}
        fill={true}

        // src={Bgpic}

        // src={"https://cdn.pixabay.com/photo/2018/05/12/19/20/freiberg-3394376_1280.jpg"}
        // width="300" height="300"
        alt='  '  />

        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 z-15'></div>

      <div className='absolute z-10 flex justify-center intems-center border border-gray-300 rounded-full
        w-60  m-2  p-2 bg-white bg-opacity-60 cursor-pointer hover:shadow-md hover:bg-opacity-100     '
      onClick={signIn}
      >
        <FcGoogle fontSize={30}/>
        <p className='test-lg font-semibold ml-4'>Sign in with Google</p>
      </div>


    </div>
  )
}


