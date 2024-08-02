//Only db.js and Client.js are required here...
import dbConnect from "../mongodb/db"; //importing an external function to connect to database.
import Client from "../mongodb/ModelClient";
import Updates from "../mongodb/Updates";
// import axios from "axios";
import { MongoClient} from "mongodb"
import { Getuserinfo } from "../../../functions global/Getuserinfo";
import { useEffect } from "react";
import mongoose from "mongoose";
import Credemail from "../mongodb/Credemail";

dbConnect(); //---> This setups the database for this page.

export default async function handler(req, res) {

      const { method } = req;
      // const { credemail } = req.body;
      switch (method) {


         case "GET": //---> when 'axios.get' is called in our frontend, the system
                // goes to this .. GET & FIND
      try {
        const clients = await Client.find({}); //---> clients is an objects
  // Deleting below produces an error: API resolved without
  // sending a response for /api/clients, this may result in stalled requests.
        res.status(200) //---> The '.status' in 'res.status' ig ignorable.
        // as res in integrated with data received. res & data go in twined.
                      .json({clients });
        // res.json(')
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
        // console.log('sorry');
      }
      break;

    case "POST": //---> when 'axios.post' is called in our frontend, the system
    // goes to this .. POST & CREATE ... IF-THROW

      try {
        const { log, desc, comments, name, date, highlight, credemail} = req.body;

        // const Clientnew =
        //       mongoose.models.log
        //     || mongoose.model(log, ClientSchema);
        // new Clientnew({log}).save()
        await
        // new Credemail ({credemail}).save();


        // if (!name && !email) throw "invalid data";
        // const client = await Client.create({ name, _id});
        // const client = await Client.create({log, desc, comments, name});
        new Client({credemail}).save();

        const newUpdate = new Updates({ action: 'create' });
        await newUpdate.save();

        // calling res gives a response to the screen.
        // await Client.save()
        if (log){
          var thiz = 'this';
        } else {
          var thiz = 'that'
        }




        res.status(200).json({success:true, body:req.body , })
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      };
      // await Client.create({ 'name':'bbbbbccctestname' });
      break;
  };


}
