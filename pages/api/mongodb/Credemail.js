import mongoose from "mongoose";
// import { Getuserinfo } from "../../../functions global/Getuserinfo";
// // This defines the schema seetings for our database.
// // Services --> Models --> 
// // const ClientSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   createdAt: {
// //     type: Date,
// //     default: new Date(),
// //   },
// // });
// // // Is this how it should be done?
// // // If you want to make a new Schema, modify below.
// // const Client = mongoose.models.thisschema || mongoose.model("thisschema", ClientSchema);

// // export default Client;
// //-----------------Below is a copy from above----------------------
// const user = Getuserinfo()
// var useremail = user.email
// // const [userInfo] = await Getuserinfo();
// // var useremail = userInfo.email

// let useremaillist=[];
// useremaillist.append(user.email)

const CredemailSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId, //---> This is considerable 
 credemail: String
 
});


const Credemail = 
              mongoose.models.credemail
            || mongoose.model("credemail", CredemailSchema);

export default Credemail;
