import mongoose from "mongoose";
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
const ClientSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId, //---> This is considerable 
  log: String,
  desc: String,
  comments:String,
  name: String,
  date: String,
  highlight: String,
  // email: String,
  // day: String,
  // createdAt: {
  //   type: Date,
  //   default: new Date(),
  // },
});
// Is this how it should be done?
// If you want to make a new Schema, modify below.
const Client = 
              mongoose.models.logdata
            || mongoose.model("logdata", ClientSchema);

export default Client;
