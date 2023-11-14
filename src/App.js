import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (!emailContent.trim()) {
        alert('Please write a message.');
      } else {
        const response = await axios.post(API_URL, { emailContent });
        alert(response.data);
      }
    } catch (error) {
      console.error(`Error connecting to ${API_URL}`);
      alert('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 min-h-screen flex justify-center items-center flex-col">
      <h1 className="pb-8 text-xl">Send Pao an anonymous message</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <textarea
          className="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300 w-full md:w-96"
          rows="4"
          cols="50"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
        <br />
        <button className="btn btn-primary w-full" type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send'}
        </button>
      </form>
      <br />
      <p>
        Medyo mabagal mag-send, free hosting kasi. And pangit pa wala pa design, basta gumagana muna messaging function saka ko na lang
        improve to bwahahahaha. Please do not spam din pala.
      </p>
    </div>
  );
}

export default App;
