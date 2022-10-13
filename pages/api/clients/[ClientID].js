import Client from "../mongodb/Client";
import dbConnect from "../mongodb/db";

dbConnect();
// async , req (request) , res (response) --> is a standard
export default async function handler(req, res) {

  const { method } = req;
  const { log, desc, comments, name, date, highlight } = req.body;
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
  }


  
}
