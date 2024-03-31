//Only db.js and Client.js are required here...
import dbConnect from "../mongodb/db";
import Client from "../mongodb/ModelClient";
// import axios from "axios";
import { MongoClient} from "mongodb"
import { Getuserinfo } from "../../../functions global/Getuserinfo";
import { useEffect } from "react";
import mongoose from "mongoose";
import Credemail from "../mongodb/Credemail";
// const express = require ('express')
// const app = express()
// app.use(express.json())


// const express = require ('express')
// const app = express()
// app.use(express.json())


dbConnect(); //---> This setups the database for this page.

// Oh so, I see the name isn't necessarily have to be 'index'
export default async function handler(req, res) {
// These two lines are like a template
// try{
  // const {_id,name} = req.body
  // const client = await Client.create({ _id:'Janeawszcasdzedr',name:'jasasdhd' });
  //       // calling res gives a response to the screen.
  //       res.json({success:true, data:client});
// } catch (error) {
//   res.json('something')
// }
// Client.init()
// const newdata = await Client.post({ 'name':'nice' });
// newdata.save()
// await Client.create({'_id': 'awassdfe', "name":"JMG"  } );
// await Client.updateOne({ 'field':'corn'});
// app.get('/', async (req, res) => {
//   const food = new Client({_id:"Kiwi", name: '7' })
//   try{
//       await food.save();
//   } catch(err){
//       console.log(err);
//   }
// })
// 'new' is a command that makes a new
// const obj = new Client();
//       obj.name = 'JMGutzzss';
//       obj.desc = 'desc';
//       obj.comments = 'this comments'
//       obj.save()

// new Client({log:'goy', desc:'nice', comments:'complicated', name:"Me", date:'today'}).save()



// await Client.create ('/clients', {'name': 'asda'})
// app.get('/', async (req, res) => {
//   const food = new Client({name:'JM' })
//   try{
//       await food.save();
//   } catch(err){
//       console.log(err);
//   }
// })
// if (typeof window !== 'undefined') {
//   const user = Getuserinfo();
//   res.json(user.email)
// }
// useEffect (()=> {
//   const user = Getuserinfo();
  // res.json('ji')
// })


// const ClientSchema = new mongoose.Schema({
//   // _id: mongoose.Schema.Types.ObjectId, //---> This is considerable
//   log: String,
//   desc: String,
//   comments:String,
//   name: String,
//   date: String,
//   highlight: String,
//   // email: String,
//   // day: String,
//   // createdAt: {
//   //   type: Date,
//   //   default: new Date(),
//   // },
// });
// // Is this how it should be done?
// // If you want to make a new Schema, modify below.













  const { method } = req;
  const { log, desc, comments, name, date, highlight, credemail} = req.body;
  switch (method) {

  //   case "GET": //---> when 'axios.get' is called in our frontend, the system
  //               // goes to this .. GET & FIND
  //     try {
  //       const clients = await Client.find({
  //         }); //---> clients is an objects
  // // Deleting below produces an error: API resolved without
  // // sending a response for /api/clients, this may result in stalled requests.
  //       res.status(200) //---> The '.status' in 'res.status' ig ignorable.
  //       // as res in integrated with data received. res & data go in twined.
  //                     .json({clients });
  //       // res.json(')
  //     } catch (error) {
  //       console.log(error);
  //       res.status(500).json({ success: false, error });
  //       // console.log('sorry');
  //     }
  //     break;

    case "POST": //---> when 'axios.post' is called in our frontend, the system
    // goes to this .. POST & CREATE ... IF-THROW

      try {
        const { log, desc, comments, name, date, highlight, credemail} = req.body;
          console.log('posting new entry to ddatabase')
        // const Clientnew =
        //       mongoose.models.log
        //     || mongoose.model(log, ClientSchema);
        // new Clientnew({log}).save()
        await
        new Client({log, desc, comments, name, date, highlight, credemail }).save();
        // calling res gives a response to the screen.
        // await Client.save()
        if (log){
          var thiz = 'this';
        } else {
          var thiz = 'that'
        }




        res.json({success:true, message:'jasdj', body:req.body , })
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      };
      // await Client.create({ 'name':'bbbbbccctestname' });
      break;
  };


}
