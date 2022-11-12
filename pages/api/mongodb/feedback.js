import mongoose from "mongoose";
import { Getuserinfo } from "../../../functions global/Getuserinfo";
// This defines the schema seetings for our database.
// Services --> Models --> 
// const ClientSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// });
// // Is this how it should be done?
// // If you want to make a new Schema, modify below.
// const Client = mongoose.models.thisschema || mongoose.model("thisschema", ClientSchema);

// export default Client;
//-----------------Below is a copy from above----------------------
if (typeof window !== 'undefined') {
  const user = Getuserinfo()
var useremail = user.email 
  //   const user = Getuserinfo();
  //   res.json(user.email)
  // }

// const [userInfo] = await Getuserinfo();
// var useremail = userInfo.email

let useremaillist=[];
useremaillist.append(user.email) }


const FeedbackSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId, //---> This is considerable 
  feedback: String,
  // log: String,
  // desc: String,
  // comments:String,
  // name: String,
  date: String,
  // highlight: String,
  credemail: String,
 
});


const ModelFeed = 
          mongoose.models.feedback
          || mongoose.model("feedback", FeedbackSchema);

// const Client = 
//             mongoose.models.useremail
//           || mongoose.model(useremail, ClientSchema);

export default ModelFeed;
