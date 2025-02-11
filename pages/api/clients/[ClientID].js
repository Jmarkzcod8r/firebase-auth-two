import Client from "../mongodb/ModelClient";
import Credemail from "../mongodb/Credemail";
import dbConnect from "../mongodb/db";
import { redis } from "../../../functions global/lib/redis";
import Updates from "../mongodb/Updates";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  const { log, desc, comments, name, date, highlight, credemail } = req.body;
  const { ClientID } = req.query;

  switch (method) {
    case "PUT":
      console.log('commencing: PUT')
      try {
        await Client.updateOne({ _id: ClientID }, { log, desc, comments, name, date, highlight });

        const newUpdate = new Updates({
          action: 'update',
          logId: ClientID,  // Include logId when updating
        });
        await newUpdate.save();

        res.status(200).json({ success: true, desc: 'Update successful' , update: newUpdate});

        // await redis.set
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await Client.deleteOne({ _id: ClientID });

        const newUpdate = new Updates({
          action: 'delete',
          logId: ClientID,  // Include logId when deleting
        });
        await newUpdate.save();
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "GET":
      try {
        console.log("..api/[ClientID] initiating");

        // Check Redis first
        // const cachedClients = await redis.get("logs-entries");

        // if (cachedClients) {
        //   console.log("Data retrieved from Redis.");
        //   return res.status(200).json({
        //     success: true,
        //     updates: [],
        //     clients: JSON.parse(cachedClients),
        //     message: "Data retrieved from Redis",
        //   });
        // }

        // If not in Redis, fetch from MongoDB
        console.log("Fetching data from MongoDB...");
        const clients = await Client.find({ credemail: ClientID });
        const updates = await Updates.find({ update: ClientID });

        // Store data in Redis for future requests
        await redis.set("logs-entries", JSON.stringify(clients));

        res.status(200).json({ success: true, updates, clients, message: "Data fetched from MongoDB and stored in Redis." });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: error.message });
      }

      break;

    case "POST":
      try {
        const CredemailSchema = new mongoose.Schema({
          first: '',
          credemail: String,
        });

        const Model = mongoose.models[ClientID] || mongoose.model(ClientID, CredemailSchema);

        await new Model({ credemail }).save();

        res.status(200).json({ success: true, body: req.body });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
