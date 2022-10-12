import axios from "axios";
import { useEffect, useState } from "react";

export default function Test(){
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [sex, setSex]=useState('')
    const [country, setCountry]=useState('')
    const [color, setColor]=useState('')
    const [status, setStatus]=useState('')

    // const strobj = JSON.stringify(obj)

    const api = axios.create({
        baseURL: "http://localhost:3000/api",
      });

    useEffect(() => {
        // const getData = async ()=> {
        //     const {data} = await api.get("/hello");

        //    return await setObj(data)
        // };
        // getData()
    //    const thisobj = getData();
    //    console.log(thisobj);
    //    setObj(thisobj.name)
    [
        api.get("/hello").then(({ data }) => {
            console.log(data);
            // console.log(data.name);
            setName(data.name);
            setEmail(data.email);
            setSex(data.sex);
            setCountry(data.country);
            setColor(data.color);
            setStatus(data.status);





        //   setObj(data.data);
        //   console.log(data.data);
        }),
      ];
    }, [name, api] //---> put your states here also
    )
    ;
  



    //   }, [api]);


    return(
        <div className="bg-pink-200 block">
          
            <div className="w-screen h-1/4 block bg-red-400 p-10">
                <span className="bg-blue-200 h-10 w-10 inline-block">das</span>
                <span className="bg-blue-200 h-10 w-10 inline-block">asd</span>
                <span className="bg-blue-200 h-10 w-10 inline-block">asd</span>
                <span className="bg-blue-200 h-10 w-10 inline-block">asd</span>
                <span className="bg-blue-200 h-10 w-10 inline-block">czd</span>
            </div>
            <div className="w-screen h-60 grid bg-orange-400">
Name: {name}, Email: {email}, sex: {sex}, country: {country}, color:{color}, status: {status}
</div>
<div className="w-screen h-60 grid bg-pink-400">

</div>
            
        </div>
    )
}