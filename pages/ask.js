import { useState } from "react";
import axios from 'axios';

const Ask = ({ setMainlist, mainlist }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAsk = async () => {
    try {
      // Ensure mainlist is valid JSON
      if (typeof mainlist !== "object" || mainlist === null) {
        console.error("Error: mainlist is not valid JSON", mainlist);
        return; // Stop execution if mainlist is invalid
      }
      console.log('this is mainlist,', mainlist)

      const response = await axios.post(
        "/api/clients/query",
        { searchTerm, mainlist }, // Send only if mainlist is valid
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Ensure response data is an array before reversing
      if (Array.isArray(response.data.data)) {
        setMainlist(response.data.data.reverse());
      } else {
        console.error("Error: Response data is not an array", response.data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }

  };

  return (
  <div className="bg-red-300">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleAsk();
        }
      }}
      placeholder="Enter search term"
    />
    <button className='ml-2' onClick={handleAsk}> Search</button>
  </div>
);
    }

export default Ask;
