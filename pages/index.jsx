/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import axios from "axios";
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
import { getAuth , onAuthStateChanged, signOut} from "firebase/auth"

// import { PrintConsole } from "./testbuttons/testbuttons";
// import { Typeof } from "./testbuttons/testbuttons";
import Add from './Icons/Add.svg';
import Save from './Icons/Save.png';
import Clr from './Icons/Clear.png';
import Del from './Icons/Delete.png'
import Out from './Icons/Out.png'
import { ForphotoURL } from "./Components/Usernav";
import {thisbase} from "../functions global/thisbase";
// const express = require ('express') 
// const app = express()
// app.use(express.json())


// import Tolog from "./Tolog";

export default function Index  (){

  //------------ Declaring Varibles ----------------
  const [uid, setUid] = useState('asfdf')
  const [id,setId]=useState('') // ---> This is liek a label number
  // arrlen is the length of the array of data we will be using.
  // I have a good feeling this would be useful in future projects
  const [arrlen, setArrlen] = useState(0) //---> I think this can be done 
                    // thru a query though I still need to look it up.
  const [photoURL, setPhotoURL]=useState('')
  const [title,setTitle]=useState('')
  const [currentdate, setCurrentdate]=useState('')
  // This is the log we will be showing to the main container in the middle.
  const [user, setUser] = useState('')
  const [log, setLog]=useState('')
  const [highlight, setHighlight] = useState('')
  const [desc, setDesc]=useState('')
  const [comments, setComments]=useState('')

  const [titleplaceholder, setTitleplaceholder]=useState('')
  const [trys, setTrys]=useState('adas')
  const [date,setDate]=useState('')
  const [name, setName]= useState ('Baby Ethel')
  const [email, setEmail]=useState('ema@gmail.com')
  const [createdAt, setCreatedAt]=useState('')
  const [_id, set_id]=useState('temp id')

  const [data, setData] = useState('tdata')

  const [obj, setObj]= useState('')

  const strdata = JSON.stringify(data)
  const [mainlist, setMainlist] = useState([])
  const [day, setDay] = useState("today")
  const [dat, setDat] = useState ('indat')
  // const [testenv,setTestenv] = useState('testenv temp')

  const router = useRouter();

  // const thisbaseURL = "localhost:3000/api"

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

  //  const Print =()=> {
  //   console.log('okasd');
  //  }   





  const Sweetshow =()=> {
  
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

      console.log(temp);
    },['']);
 

    console.log('this is temp', temp);
    
  }


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
  
        
      };   
      return text 
    };
    Sweetshow2()
  
  }
    function AbraK (){
      if (typeof window !== 'undefined'){
      document.getElementById('tarea2').style.display='none' }
    };
  //  let thislist=[''];
    
  // var thisbase = 'https://firebase-auth-two-d9sm.vercel.app/api'
  // var thisbasez = "http://localhost:3000/api"
  // const api = ''
  // try{
  //   var thisbasez = thisbase()
  //   const api = axios.create({
  //     baseURL: thisbasez,
  //   });

  // } catch {
  //   console.log('');
  // }
  var thisbasez = thisbase()
  const api = axios.create({
      baseURL: thisbasez,
    });
  
   
//  console.log(thisbase());
  // setTestenv(JSON.stringify(process.env.AXIOS_BASE));
// let glist=[];
// console.log('hu');
// console.log(JSON.stringify(process.env.AXIOS_BASE));

async function getData() {
  // http://localhost:3000/api
const data = await api.get("/clients");

console.log(typeof(data));
  console.log('apidata',[data.data.clients[1]]);
  // setMainlist([data.data.clients])
  let clientslist = data.data.clients;
  console.log(typeof(clientslist));
  console.log('clientslist:',clientslist);
  setMainlist(data.data.clients.reverse())
  
  // const object0 = data.data
  // console.log('object0',object0.name);
  // setObj(object0)
  // setData(apidata)
  // setLog(data.data)
}


useEffect(()=> {

  // const envtest = JSON.stringify(process.env.AXIOS_BASE);
  // // setTestenv(envtest);
  // console.log('asdas');
  // console.log(envtest);
  console.log('this is thisbase:',thisbase());

  const ForphotoURL =async ()=>{
    const [userInfo] = await Getuserinfo();
    // console.log(userInfo);
    // setUser(userInfo);
    setPhotoURL(userInfo.photoURL)
    // return userInfo.photoURL
  };
  ForphotoURL();

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
    Dbadd();
    Datenow();
    getData()
    
    // setPhotoURL(ForphotoURL())


                                            },[])
  const signOut = () => {
    localStorage.clear();
    router.push("/login")
    // console.log('ok')
  }


function Clear(){
  // console.log('ok');
  //  setUid('nice one');
  setComments('');
  setDesc('');
   setLog('');
   setHighlight('');
 }
 
              let templist=
              [{'name':"JM","log":'this is my first log which is nice', 'desc':'okay this is cool', 'comments':'What?'},
                            {'name':'Kat',"log":'this is my second log which is niceeree','desc':'describe me','comments':'morph is chad'},
                            {'name':'Ma',"log":'There is a lot I need to do','desc':'something times sotmthing', 'comments':`Let's go brandon`},
                          ];
              
              // function Setmylog({el}){
              //   console.log('I was clicked');
              //   setLog({el.log})
              // }
              console.log('type of:',typeof(templist));

              const Savedb = async (e) => {
                e.preventDefault();
            
                Datenow();
                  // var field = 'nice'
                  // setName('Baby Mica')
              //  const data =  await api.post("/clients", {name:'nassssssmeme'}, {
                try {
                  // Inchangelog();
                  // setLog(log)
                  // setName('Melody')
                  // const object = {log:'this is log', desc:'this is desc'}
                await axios.post(thisbasez+"/clients", {log, desc, comments, date, name, highlight}, {
                //  await api.post("/clients", {log:'log'}, {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'JWT fefege...'
                } }) ;
                getData()
                         } catch (error) {
                  console.error(error.response.data);
                };
                alert('New Entry Created')
                // location.reload()
                // console.log(data);
                                }

      const Expresssavedb=()=> {
        app.get('/', async (req, res) => {
          const food = new Client({foodName:"Kiwi", daysSinceIAte: 7, coor:"i don't know" })
          try{
              await food.save();
          } catch(err){
              console.log(err);
          } } ) }

      function Datenow(){
        // var now = new Date();
        // console.log(now);
        // console.log(typeof(now));
        var today = new Date();
        
        
        function thisday(){
          var typeday = today.getDay();
          if (typeday === 0) { return 'Mon'  };
          if (typeday === 1) { return 'Tue'  };
          if (typeday === 2) { return 'Wed'  };
          if (typeday === 3) { return 'Thu'  };
          if (typeday === 4) { return 'Fri'  };
          if (typeday === 5) { return 'Sat'  };
          if (typeday === 6) { return 'Sun'  };
        }
        var tday = thisday()
        
        function thisMonth(){
          var typedy = today.getMonth();
          // console.log(typeday);
          var typeday = typedy+1
          if (typeday === 1) { return 'Jan'  };
          if (typeday === 2) { return 'Feb'  };
          if (typeday === 3) { return 'Mar'  };
          if (typeday === 4) { return 'Apr'  };
          if (typeday === 5) { return 'May'  };
          if (typeday === 6) { return 'Jun'  };
          if (typeday === 7) { return 'Jul'  };
          if (typeday === 8) { return 'Aug'  };
          if (typeday === 9) { return 'Sep'  };
          if (typeday === 10) { return 'Oct'  };
          if (typeday === 11) { return 'Nov'  };
          if (typeday === 12) { return 'Dec'  };
        
        }
        
        var Mnth = thisMonth()
       
         const date = today.getFullYear() + ' - ' + Mnth + ' - ' + today.getDate() + ' ( ' + tday + ' )';
        setDate(date)
      
      }


      function Print(){            
        console.log(name, _id); }

    function Inchangelog(e){
      e.preventDefault();
      // console.log(typeof(e));
      // console.log(e);
      setLog(e.target.value)
    }

    function Inchangedesc(e){
      e.preventDefault();
      setDesc(e.target.value)
    }

    function Inchangecomm(e){
      e.preventDefault();
      setComments(e.target.value)
    }

    function Inchangehighlight(e){
      e.preventDefault();
      setHighlight(e.target.value)
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

    function Conlog (){
      console.log(mainlist);
      // console.log(' log:'+ log + ' desc: ' + desc );
    }

    const handleUpdateClient = async (e) => {
      e.preventDefault();
      console.log('pressed');
      // if (isValidFormData()) return;
  
      try {
        // setIsLoading(true);
        await api.put(`clients/${_id}`, { log, desc, comments, name, date, highlight })
          .then(response=>{
          console.log(response);
          // list[0].log="111111"w
        })
        // setName("");
        // setEmail("");
        // setId(null);
        // setIsFormOpen(!isFormOpen);
  
        // toast({
        //   title: "Atualizado com sucesso!",
        //   status: "success",
        //   duration: 9000,
        //   isClosable: true,
        // });
        // setIsLoading(false);
      } catch (error) {
        console.log(error);
        // setIsLoading(false);
      };
      getData()

    };

    const Delete = async(e)=>{
      e.preventDefault();
      try {
        await api.delete(`/clients/${_id}`)
      } catch (err) {
        console.log('err:',err);
      };
      Clear();
      getData()

      
    }


  return (
   <div className="" >
   
       <img
      className='top-0 left-0 w-screen h-screen object-cover fixed' 
      // scr={Add}
      src={"https://cdn.pixabay.com/photo/2016/05/26/12/56/waterfalls-1417102_1280.jpg"} 
      alt=' '  />
   
    <div id="Unav"><Usernav/> </div>
    <div  className="flex flex-row z-1000 relative w-full h-200 top-0  pt-6"> 
    
                <div className=" w-[31.25%] relative flex flex-col  content-center items-center p-2  ml-4 mr-7 
                       bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg">
                <div className="relative  grid w-[100%] grid-cols-5 justify-self-auto items-end p-1 mr-0 pb-4">
                  <div className="col-span-2  top-0 relative mb-16 ml-3">
                    <button onClick={signOut} ><Image src={Out} alt="Clear" width={40} height={40} className="hover:scale-110"/> </button>
                    </div> {/* {testenv} */}
                <img src={photoURL} alt="photome" className=" relative justify-self-center mt-5 rounded-full "/>
                </div>
                 {/* <h1> this is _id: {_id} </h1> */}
                  {/* <button onClick={Sweetshow} className="h-14  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105"> Add ENtry
     
                  </button>
                  <button onClick={func} className="h-14  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105"> 
                      Sweetshow2
                    </button> */}
                    {/* <Image scr={Add} layout="fill" /> */}
                   {/* (date) */}
                   {/* {date} {name} {email} */}
                     {/* <button onClick={Savedb} className="h-12  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105 m-1" >Add Entry</button> */}
                     <div  className="flex flex-row bg-blue-200 px-6 py-2 rounded-full">
                     <button onClick={Delete} className="mr-2"><Image src={Del} alt="Clear" width={40} height={40} className="hover:scale-110"/></button>
                     <button onClick={Clear} className="mx-2"><Image src={Clr} alt="Clear" width={40} height={40} className="hover:scale-110"/></button>
                      <button onClick={handleUpdateClient} className="mx-2"><Image src={Save} alt="Add" width={40} height={40} className="hover:scale-110"/></button>
                      <button onClick={Savedb} className="ml-2"><Image src={Add} alt="Add" width={40} height={40} className="hover:scale-110"/></button>

                      </div>
                    {/* <button onClick={handleUpdateClient} className="h-12  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105 m-1" >Update</button> */}
                    {/* <button onClick={ClearNav} className="h-12  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105 m-1">Toggle Navbar</button> */}
                    {/* <button onClick={Datenow} className="h-12  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105 m-1" >Current Date</button>  */}
                    {/* <button onClick={Delete} className="h-12  min-w-[70%] bg-blue-700 rounded-lg hover:scale-105 m-1" >Delete</button> */}
                    
                    
                  <div className=' mt-5 w-[95%] block h-72 px-4 overflow-auto rounded-xl'> 
                    
                      {  mainlist.map((el, index)=> (
                     
                          <div  key={index*2} className="flex flex-row">
                          
                          <button key={index*3} onClick={function Con(){
                              // var x = document.getElementById("mapdiv"+el);
// This states that if 'el.desc' exists or is true, method 'setDesc(e.desc)' executes or desc = ''    
                            el._id? set_id(el._id):set_id('null')
                            el.log  ? setLog(el.log):setLog('');
                            el.desc ? setDesc(el.desc):setDesc('') ;
                            el.comments ? setComments (el.comments): setComments('')
                            el.highlight? setHighlight (el.highlight) : setHighlight('')
                          }} className='w-full min-h-10 bg-violet-600 opacity-[95%] p-2 rounded mt-2 hover:scale-105' >
                             {/* {key}  */} {el.date}                             
                             </button></div>
                        
                     
                      ))
                      }
                      
                   </div>
                </div>
                {/* <div className="h-auto w-auto bg-green-500"> */}
                <textarea id="tarea2" type="text" placeholder='Log' value={log} /* defaultValue={log} */ onChange={Inchangelog}  
                  className="w-[37.5%] relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center
                              mr-9"/>
                {/* </div> */}
                <div className='w-[31.25%] flex flex-col  pr-9'> {/* This is uid: {uid} */}
               

{/* <textarea id="tarea2" type="text" placeholder='Highlights' value={desc} defaultValue={desc} onChange={Inchangedesc} 
                           className="w-full h-1/2 relative flex bg-white mb-4 bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/> */}
                   <textarea id="tarea2" type="text" placeholder='Highlight' value={highlight} /* defaultValue={desc} */ onChange={Inchangehighlight} 
                           className="w-full h-1/2 relative flex bg-white mb-4 bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>
                <textarea id="tarea2" type="text" placeholder='Description' value={desc} /* defaultValue={desc} */ onChange={Inchangedesc} 
                           className="w-full h-1/2 relative flex bg-white mb-4 bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>
                  <textarea id="tarea2" type="text" placeholder='Comments' value={comments} /* defaultValue={comments} */ onChange={Inchangecomm} 
                           className="w-full h-1/2 relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/>
                   {/* <textarea id="tarea2" type="text" placeholder='Extras' value={log} defaultValue={log} onChange={Inchange} 
                           className="w-full h-1/2 relative flex bg-white bg-opacity-80 backdrop-blur-lg rounded-xl drop-shadow-lg p-4 justify-center"/> */}

                </div>
                      </div>
          </div>
  //  </div>
  )
}


