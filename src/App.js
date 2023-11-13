import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, { emailContent });
      alert(response.data); // Log success or error
    } catch (error) {
      console.error(`Error connecting to ${API_URL}`);
      alert('Error:', error);
    }
  };

  return (
    <div>
      <h1>Send Pao an anonymous message</h1>
      <form onSubmit={handleSubmit}>
        <textarea rows="4" cols="50" value={emailContent} onChange={(e) => setEmailContent(e.target.value)} />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
