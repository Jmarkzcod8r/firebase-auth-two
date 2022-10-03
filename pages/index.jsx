/* eslint-disable react/jsx-key */
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
import {db} from '../firebase/firebase-config'
import {doc , setDoc} from "firebase/firestore"
import { getAuth , onAuthStateChanged} from "firebase/auth"
// import Tolog from "./Tolog";

export default function Index  (){

  //------------ Declaring Varibles ----------------
  const [uid, setUid] = useState('asfdf')
  const [id,setId]=useState('') // ---> This is liek a label number
  // arrlen is the length of the array of data we will be using.
  // I have a good feeling this would be useful in future projects
  const [arrlen, setArrlen] = useState(0) //---> I think this can be done 
                    // thru a query though I still need to look it up.
  const [title,setTitle]=useState('')
  const [currentdate, setCurrentdate]=useState('')
  // This is the log we will be showing to the main container in the middle.
  const [log, setLog]=useState('templog')


  const [titleplaceholder, setTitleplaceholder]=useState('')
  const [trys, setTrys]=useState('adas')
  const [date,setDate]=useState('')

  const handleSubmit = async (e) => { // This still needs editing and also set 
                              // up of useStates
    e.preventDefault(); //---> this prevents the load from reloading. I think this is 
                        // what I need for whiteseed.live. need to dig unto this deeper.
    if (title !== "") {
    // await addDoc(collection(db, ---> seems to be a template type
      await addDoc(collection(db, "thisdata"), { //---> This pushes our inputs into the 
                                              // database as mentioned.
        id, title, currentdate, log, titleplaceholder

                                              })  }   };

   const Print =()=> {
    console.log('okasd');
   }   





  const Sweetshow =()=> {
    // setLog('')
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
    



    // useEffect(()=> {

    // function Todate(){
    //           try{
    //               var today = new Date();
    //               let tday = today.getDay();
    //               function tzday (){
    //                 return (tday===0)? 'Sunday'
    //                 : (tday===1)? 'Monday'
    //                 : (tday===2)? 'Tuesday'
    //                 : (tday===3)? 'Wednesday'
    //                 : (tday===4)? 'Thursday'                  
    //                 : Saturday
    //               };
    //               const thisday = tzday();
    //               console.log(thisday);

    //           var dd = String(today.getDate()).padStart(2, '0');
    //           var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //           var yyyy = today.getFullYear();

    //           today = mm + '/' + dd + '/' + yyyy;
    //           var todayplus = today +  ` (` + thisday + ')'
              
    //             setDate(todayplus);
    //             } catch {
    //                 console.log('error');
    //               } }   ;
    //               Todate()
    //                              ,[]}) 
                                 //---> useEffect sclosing tag
// function getUID(){

// }

useEffect(()=> {

   async function Dbadd(){
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        console.log('this is user', uid);
        await setDoc(doc(db, "Firebase-test users", "num4"), {
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
    Dbadd()
                                            },[])

function Test (){
  // console.log('ok');
  //  setUid('nice one');
   setLog('')
 }
                
            function SetEl(arg){
                setLog(arg)
            }

              let templist=[{'name':"JM","log":'this is my first log which is nice'},
                            {'name':'Kat',"log":'this is my second log which is niceeree'}];
              
              // function Setmylog({el}){
              //   console.log('I was clicked');
              //   setLog({el.log})
              // }
              console.log('type of:',typeof(templist));

        
    function Inchange(e){
      e.preventDefault();
      // console.log(typeof(e));
      // console.log(e);
      setLog(e.target.Value)
    }
    console.log(' this is log',log);

    if (typeof window !== 'undefined'){
    var textareas = document.getElementsByTagName('textarea');
    var count = textareas.length;
    for(var i=0;i<count;i++){
        textareas[i].onkeydown = function(e){
            if(e.key==='Tab' ){
                e.preventDefault();
                var s = this.selectionStart;
                this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                this.selectionEnd = s+1; 
            }
        }
    } }

    function ClearNav (){
      
        var x = document.getElementById("Unav");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
     
    }

    // function Settinglog({el}){
    //  return  setLog(el.log)
    // }
    function Settinglog (){
     
    
  }

  return (
   <div className="" >
    {/* <div className="absolute"> */}
       <img
      className='top-0 left-0 w-screen h-screen object-cover fixed' 
      src={"https://cdn.pixabay.com/photo/2016/05/26/12/56/waterfalls-1417102_1280.jpg"} 
      alt=' '  />
      {/* </div> */}
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10'>

        
      </div> */}
      
        {/* <div className="">adas</div> */}
    {/* <div className="relative"> */}
    <div id="Unav"><Usernav/> </div>
    <div Style="height:600px" className="flex flex-row z-1000 relative w-full  top-0  pt-6"> 
                <div className=" w-[31.25%] relative h-auto flex flex-col  content-center items-center p-2   ">
                 <h1>{log}asd</h1>
                  <button onClick={Sweetshow} className="h-14  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105"> Add ENtry
                      {/* {templist.id} */}
                  </button>
                  <button onClick={func} className="h-14  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105"> 
                      Sweetshow2
                    </button>
                    <button onClick={Test} >Test button</button>
                    <button onClick={ClearNav} >Toggle Navbar</button>
                  <div className=' bg-green-700 mt-5 w-[90%] block h-[75%] px-2 overflow-auto'> 
                    
                      {  templist.map((el)=> (
                        // eslint-disable-next-line react/jsx-key
                       
                          // eslint-disable-next-line react/jsx-key
                          // <h1> {el.name} and {el.log}</h1>
                        
                          // eslint-disable-next-line react/jsx-key
                          // <Tolog elname={el.name} el={el}  ellog={el.log}  Settinglog={Settinglog} /* Setmylog={Setmylog} */ />
                          /*  SetEl={SetEl} */
                          //  />
                          <div>
                          <button  onClick={function Con(){
                            setLog(el.log)
                          }} className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105' >
                              {/* {el.name} {elname} */}
                               {/* {dummy} */} {el.log}
                              </button> </div>
                        
                     
                      ))
                      }
                      
                      
                      {/* <button onClick={AbraK} className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'>{date}  </button>
                      <button onClick={Dbadd} className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'>Add to database</button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'>Test Button 1</button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'>Test Button 2</button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'>Test Button 3</button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button>
                      <button className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105'></button> */}

                   </div>
                </div>

                {/* <form onSubmit={handleSubmit} className='flex w-1/2'> */}
                {/* <div> */}
                  {/* Placeholder is only useful when value="" */}
                <textarea id="tarea2" type="text" placeholder='Body' value={log} defaultValue={log} onChange={Inchange}  
                  className="w-[37.5%] relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>
                 
                 {/* {log}  */}
                  {/* </div>  */}
                
                          {/* {log}sdasdas */}
                {/* </div> */}
              {/* </form> */}
                           
                <div className='w-[31.25%] flex flex-col '> {/* This is uid: {uid} */}
                <textarea id="tarea2" type="text" placeholder='Description' value={log} defaultValue={log} onChange={Inchange} 
                           className="w-full h-1/2 relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>
                  <textarea id="tarea2" type="text" placeholder='Comments' value={log} defaultValue={log} onChange={Inchange} 
                           className="w-full h-1/2 relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>
                   <textarea id="tarea2" type="text" placeholder='Extras' value={log} defaultValue={log} onChange={Inchange} 
                           className="w-full h-1/2 relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>

                </div>
                      </div>
          </div>
  //  </div>
  )
}


