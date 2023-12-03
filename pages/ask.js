import { useState } from "react";
import axios from 'axios';

const Ask = ({ setMainlist }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAsk = async () => {
    try {
      const response = await axios.post(
        "/api/clients/query", // Endpoint for the Next.js API route
        { searchTerm: searchTerm }, // Pass the searchTerm as the question
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Update the Mainlist state with the response data
      setMainlist(response.data.data.reverse());

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
  <div>
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
