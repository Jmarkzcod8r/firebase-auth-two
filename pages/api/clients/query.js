import dbConnect from "../mongodb/db";
import ModelFeed from "../mongodb/feedback";
import mongoose from "mongoose";

export default async function QueryPage(req, res) {
  const { method } = req;
  const { searchTerm} = req.body

  switch (method) {
    case "POST":
      try {
        // console.log('searchTerm:', searchTerm)
        // const clients = await ModelFeed.find({
          const clients = await mongoose.models.logdata.find({
          'log': { $regex: searchTerm }, // Search for 'Dude' (case insensitive)
        });
        // console.log(clients)
        res.status(200).json({ success: true, data: clients }); // Return the data as JSON
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error });
      }
      break;

    default:
      res.status(405).json({ success: false, error: "Method Not Allowed" });
      break;
  }
}
