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
import Swal from "sweetalert2";


export default function Index  (){

  //------------ Declaring Varibles ----------------
  const [id,setId]=useState(0)
  // arrlen is the length of the array of data we will be using.
  // I have a good feeling this would be useful in future projects
  const [arrlen, setArrlen] = useState(0) //---> I think this can be done 
                    // thru a query though I still need to look it up.
  const [title,setTitle]=useState('asd')
  const [currentdate, setCurrentdate]=useState('')
  // This is the log we will be showing to the main container in the middle.
  const [log, setLog]=useState('')
  const [titleplaceholder, setTitleplaceholder]=useState('')
  const [trys, setTrys]=useState('adas')
  const [date,setDate]=useState('')

  const handleSubmit = async (e) => { // This still needs editing and also set 
                              // up of useStates
    e.preventDefault(); //---> this prevents the load from reloading. I think this is 
                        // what I need for whiteseed.live. need to dig unto this deeper.
    if (title !== "") {
    // await addDoc(collection(db, ---> seems to be a template type
      await addDoc(collection(db, "todos"), { //---> This pushes our inputs into the 
                                              // database as mentioned.
        id, title, currentdate, log, titleplaceholder


      })  }   };

   const Print =()=> {
    console.log('okasd');
   }   

  const Sweetshow =()=> {
    // const [sweet2title, setSweet2title]=useState('')
    var temp='';
    const swaldata = Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      // Swal.fire(`
      //   Login: ${result.value.login}
      //   Password: ${result.value.password}
      // `.trim())
      // const Setr = ()=> {
      //   setTitle( result.value.login)
      // };
      // Setr();
      
      console.log(temp);
    },['']);
    // console.log('this is swaldata', swaldata);
    // console.log(result.value.login);
    // const print = async ()=> {
    //   const dataw = await fetch (Login)
    // }


    

    console.log('this is temp', temp);
    
    // , function(){
    //   console.log('hi');
    // }
  }

  // if (sweettitle){
  //   try{
  //     console.log(sweettitle);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
 
      
      
      
      
      //         confirmButtonText: 'Sign in',
      // // focusConfirm: false, ---> What is this for?
      // preConfirm: () => {
      //   const login = Swal.getPopup().querySelector('#login').value
      //   const password = Swal.getPopup().querySelector('#password').value
      //   if (!login || !password) {
      //     Swal.showValidationMessage(`Please enter login and password`)
      //   }
      //   return { login: login, password: password }
      // }
   
    // .then(
    //   Setdata()
    // )
    // function setmetitle(arg){
    //   setmetitle(arg);
    // }

    // let temlist=[];
    // function thislist(arg){
    //   temlist.push(arg)
    //   console.log('this is temlist', temlist);
    //   setTitle(temlist[0])
    // }
    
    // let templist=['adsaasdasdssahhhh'];

    function func (){
    const Sweetshow2 =async()=> {
      const { value: text } = await Swal.fire({
        title: 'Input email address',
        input: 'text',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
      });
      
      // console.log('this is value', value);

      if (text) {
        console.log('this is text',text);
        // thislist(text)
        // textz = text
        // console.log(textz);
        // console.log(templist);
        
      };   
      return text 
    };
    Sweetshow2()
    // let thistext = Sweetshow2();
    // console.log(typeof(thistext));
    // // setTitle(thistext)
    // console.log('Sweetshow2', Sweetshow2);

  }
    function AbraK (){
      if (typeof window !== 'undefined'){
      document.getElementById('tarea2').style.display='none' }
    };
    // AbraK()



    useEffect(()=> {

    function Todate(){
              try{
                  var today = new Date();
                  let tday = today.getDay();
                  function tzday (){
                    return (tday===0)? 'Sunday'
                    : (tday===1)? 'Monday'
                    : (tday===2)? 'Tuesday'
                    : (tday===3)? 'Wednesday'
                    : (tday===4)? 'Thursday'                  
                    : Saturday
                  };
                  const thisday = tzday();
                  console.log(thisday);

              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = today.getFullYear();

              today = mm + '/' + dd + '/' + yyyy;
              var todayplus = today +  ` (` + thisday + ')'
              
                setDate(todayplus);
                } catch {
                    console.log('error');
                  } }   ;
                  Todate()
                
                }) //---> useEffect sclosing tag



  return (
   <div>
    
    <Usernav/>
    <div className="flex  z-1000 absolute w-screen h-96 top-18 "> 
                <div className=" w-1/4 relative h-auto bg-pink-700 flex flex-col  content-center items-center   ">
                  <button onClick={Sweetshow} className="h-14  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105"> Add ENtry

                  </button>
                  <button onClick={func} className="h-14  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105"> 
                      Sweetshow2
                    </button>
                  <div className=' bg-green-700 mt-5 w-[90%] block h-[75%] px-2 overflow-auto'> 
                      <button onClick={AbraK} className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'>{date}  </button>
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

                <form onSubmit={handleSubmit} className='flex w-1/2'>
                <div>
                {/* <textarea id="tarea1"  placeholder='enter log here' className="w-[230%] h-[100%] relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>  */}
                <textarea id="tarea2" placeholder='enter log here' className="w-[230%] h-[100%] relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/> 

             
                
                </div>
              </form>
                            {/* <input
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> */}

                


                <div className='w-1/4 flex bg-red-900'></div>
          </div>
   </div>
  )
}


