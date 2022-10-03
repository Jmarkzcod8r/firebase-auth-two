// import { setLogLevel } from "firebase/app";
import { setLogLevel } from "firebase/app";
import { useState } from "react";

export default function Tolog({el,setLog, Setmylog}){
    // const [dummy, setDummy] = useState('')

    // function SetEl=SetEl
    // function Testfor(){
    // console.log('this is', el.name);
    // setDummy('okay')
    // }
    function Setty (){
        // setLog('oksad');
        Setmylog({el})
    }
    // console.log('asd')

    return (
        <div>
        <button  onClick={Setty} className='w-full h-10 bg-violet-800 p-2 rounded mt-2 hover:scale-105' >
            {(el.name) }
             {/* {dummy} */}
            </button>

            {/* <div className="bg-red-400 block">
                <span className="bg-green-200 inline-block w-52">aaaadasdd</span>
                <span className="bg-blue-400 inline-block w-52">adasdas</span>
            </div> */}
            </div>
    
    
    )
   
    
}