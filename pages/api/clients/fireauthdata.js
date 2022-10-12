//Only db.js and Client.js are required here...
// import dbConnect from "../mongodb/db";
// import Client from "../mongodb/Client";


// dbConnect(); //---> This setups the database for this page.

// // Oh so, I see the name isn't necessarily have to be 'index'
// export default async function handler(req, res) {
//   // const data = await Entrylogs.find({});
//   // res.status(200).json({data:data})
//   const { method } = req;
//   switch (method) {

//     case "GET": //---> when 'axios.get' is called in our frontend, the system 
//                 // goes to this .. GET & FIND
//       try {
//         const datab= await Client.find({}); //---> clients is an objects
//   // Deleting below produces an error: API resolved without 
//   // sending a response for /api/clients, this may result in stalled requests.
//         res.status(200) //---> The '.status' in 'res.status' ig ignorable.
//         // as res in integrated with data received. res & data go in twined.
//                       .json({data:datab });
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, error });
//         // console.log('sorry');
//       }
//       break;

//     case "POST": //---> when 'axios.post' is called in our frontend, the system 
//     // goes to this .. POST & CREATE ... IF-THROW

//       try {
//         const { name, email } = req.body;

//         if (!name && !email) throw "invalid data";
//         const client = await Client.create({ name, email });
//         // calling res gives a response to the screen.
//         res.status(201).json({success:true, data:client});
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, error });
//       }
//       break;
//   }

  
// }
