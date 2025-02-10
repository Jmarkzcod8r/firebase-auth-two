// import dbConnect from "../mongodb/db";
// import ModelFeed from "../mongodb/feedback";
// import mongoose from "mongoose";
// import { redis } from "../../../functions global/lib/redis";

// export default async function QueryPage(req, res) {
//   const { method } = req;
//   const { searchTerm} = req.body

//   switch (method) {
//     case "POST":
//       try {
//         console.log('searchTerm:', searchTerm)
//         // const clients = await ModelFeed.find({

//         //   const clients = await mongoose.models.logdata.find({
//         //   'log': { $regex: searchTerm },
//         // });

//         // await redis.set('Users-mongo',JSON.stringify(clients))
//         const redisget = await redis.get('Userss')
//         console.log('searchign...')
//         // console.log(redisget)

//         const searchForValue = (array, searchValue) => {
//           const matchingObjects = [];
//           for (const obj of array) {
//               let found = false;
//               for (const key in obj) {
//                   if (obj[key].toString().includes(searchValue)) {
//                       found = true;
//                       break;
//                   }
//               }
//               if (found) {
//                   matchingObjects.push(obj); // Add the object to the result array
//               }
//           }
//           return matchingObjects;
//       };

//       const searchresult = (searchForValue(JSON.parse(redisget), searchTerm))



//         // console.log(redisget.type)
//         // console.log(redisget)

//         res.status(200).json({ success: true, data: searchresult }); // Return the data as JSON
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, error: error });
//       }
//       break;

//     default:
//       res.status(405).json({ success: false, error: "Method Not Allowed" });
//       break;
//   }
// }

import dbConnect from "../mongodb/db";
import ModelFeed from "../mongodb/feedback";
import mongoose from "mongoose";
import { redis } from "../../../functions global/lib/redis";

export default async function QueryPage(req, res) {
  const { method } = req;
  const { searchTerm , mainlist } = req.body;

  switch (method) {
    case "POST":
      try {
        // console.log(JSON.stringify(mainlist))
        console.log("searchTerm:", searchTerm);

        // Check if "logs-entries" exists in Redis
        const existingLogs = await redis.get("logs-entries");

        if (!existingLogs) {
          // Store mainlist in Redis only if it does not exist
          await redis.set("logs-entries", JSON.stringify(mainlist));
          console.log("logs-entries added to Redis.");
        } else {
          console.log("logs-entries already exists in Redis. Skipping storage.");
        }

        // Retrieve cached data from Redis
        const redisget = await redis.get("logs-entries");
        // await redis.set('foost', 'bars');

        if (!redisget) {
          return res.status(404).json({ success: false, error: "No cached data found" });
        }

        let cachedData;
        try {
          cachedData = JSON.parse(redisget);
          if (!Array.isArray(cachedData)) {
            throw new Error("Cached data is not an array");
          }
        } catch (parseError) {
          return res.status(500).json({ success: false, error: "Invalid JSON in Redis cache" });
        }

        // Search function
        const searchForValue = (array, searchValue) => {
          return array.filter(obj =>
            Object.values(obj).some(value => value.toString().includes(searchValue))
          );
        };

        // const searchResult = searchForValue(cachedData, searchTerm);

        const searchResult = searchForValue(cachedData, searchTerm);

        res.status(200).json({ success: true, data: searchResult });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: "Method Not Allowed" });
      break;
  }
}

