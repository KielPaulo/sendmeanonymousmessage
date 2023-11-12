import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/sendEmail', { emailContent });
      console.log(response.data); // Log success or error
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Send me anonymous message</h1>
      <form onSubmit={handleSubmit}>
        <textarea rows="4" cols="50" value={emailContent} onChange={(e) => setEmailContent(e.target.value)} />
        <br />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default App;
