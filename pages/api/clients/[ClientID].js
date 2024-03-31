import Client from "../mongodb/ModelClient";
import Credemail from "../mongodb/Credemail"
import dbConnect from "../mongodb/db";
import { redis } from "../../../functions global/lib/redis";
// import { useRouter } from "next/router";

// This is a dynamic page

dbConnect();
// async , req (request) , res (response) --> is a standard
export default async function handler(req, res) {

  // console.log(window.location.origin)

  // const {asPath  , pathname} = useRouter();

  // console.log(pathname)

  const { method } = req;
  const { log, desc, comments, name, date, highlight, credemail } = req.body;
  const { ClientID } = req.query;
  // I think I need to learn  more about these switch-cases.
  switch (method) {

    case "PUT":
      try {

        // if (!name && !email) return "inavalid data";
        await Client.updateOne({ _id: ClientID }, { log, desc, comments, name, date, highlight});
        res.status(200).json({ success: true , desc: 'nice'});
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await Client.deleteOne({ _id: ClientID });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

      // case "GET":
      //   try {
      //     if (ClientID === 'logdatas'){
      //       const data =
      //       await Client.find({})
      //      res.status(200).json({ success: true , data: data});
      //         };
      //         if (ClientID === 'credemails'){
      //           const data =
      //           await Credemail.find({})
      //          res.status(200).json({ success: true , data: data});
      //             };
      //     // if (!name && !email) return "inavalid data";

      //   } catch (error) {
      //     console.log(error);
      //     res.status(500).json({ clientid: ClientID,success: false, error });
      //   }
      //   break;

    //I think this is where I put my redis functionality.
        case "GET": //---> when 'axios.get' is called in our frontend, the system
                // goes to this .. GET & FIND
      try {



        const clients = await Client.find({ 'credemail':
          ClientID}); //---> clients is an objects
  // // // Deleting below produces an error: API resolved without
  // // // sending a response for /api/clients, this may result in stalled requests.
  // console.log('clients',clients)

        // res.json(')

  // const user = await redis.get('Userss') //We need to stringify `clients` or error
  // const clients = JSON.parse(user)
  // res.status(200) //---> The '.status' in 'res.status' ig ignorable.
  // // as res in integrated with data received. res & data go in twined.
  //               .json({success: true,clients });
  res.status(200) //---> The '.status' in 'res.status' ig ignorable.
  // as res in integrated with data received. res & data go in twined.
                .json({success: true,clients });

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
            // await
            // // new Credemail ({credemail}).save();


            // // if (!name && !email) throw "invalid data";
            // // const client = await Client.create({ name, _id});
            // // const client = await Client.create({log, desc, comments, name});
            // new Model({credemail}).save();
            // // calling res gives a response to the screen.
            // // await Client.save()
            // if (log){
            //   var thiz = 'this';
            // } else {
            //   var thiz = 'that'
            // }
            const CredemailSchema = new mongoose.Schema({
              // _id: mongoose.Schema.Types.ObjectId, //---> This is considerable
              firts:''   ,
              credemail: String,
              // log: String,
              // desc: String,
              // comments:String,
              // name: String,
              // date: String,
              // highlight: String,

            });


            const Model =
                      mongoose.models[ClientID]
                      ||
                       mongoose.model({ClientID}, CredemailSchema);

            await new Model ({credemail}).save()








            res.status(200).json({success:true, body:req.body , })
          } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error });
          };
          // await Client.create({ 'name':'bbbbbccctestname' });
          break;




                  }







}
