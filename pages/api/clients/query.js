import dbConnect from "../mongodb/db";
import ModelFeed from "../mongodb/feedback";
import mongoose from "mongoose";
import { redis } from "../../lib/redis";

export default async function QueryPage(req, res) {
  const { method } = req;
  const { searchTerm} = req.body

  switch (method) {
    case "POST":
      try {
        console.log('searchTerm:', searchTerm)
        // const clients = await ModelFeed.find({

        //   const clients = await mongoose.models.logdata.find({
        //   'log': { $regex: searchTerm },
        // });

        // await redis.set('Users-mongo',JSON.stringify(clients))
        const redisget = await redis.get('Userss')
        // console.log(redisget)

        const searchForValue = (array, searchValue) => {
          const matchingObjects = [];
          for (const obj of array) {
              let found = false;
              for (const key in obj) {
                  if (obj[key].toString().includes(searchValue)) {
                      found = true;
                      break;
                  }
              }
              if (found) {
                  matchingObjects.push(obj); // Add the object to the result array
              }
          }
          return matchingObjects;
      };

      const searchresult = (searchForValue(JSON.parse(redisget), searchTerm))



        // console.log(redisget.type)
        // console.log(redisget)

        res.status(200).json({ success: true, data: searchresult }); // Return the data as JSON
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
