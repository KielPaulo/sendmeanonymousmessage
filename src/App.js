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
    <div className="p-8 min-h-screen w-96 mx-auto">
      <h1 className="pb-8 text-xl">Send me an anonymous message</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <textarea
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          rows="4"
          cols="50"
          value={emailContent}
          autoFocus={true}
          onChange={(e) => setEmailContent(e.target.value)}
        />
        <br />
        <button className="btn btn-primary w-full relative" type="submit" disabled={submitting}>
          <div className="flex items-center">
            {submitting ? 'Sending' : 'Send'}
            {submitting && <span className="loading loading-bars loading-sm ml-2"></span>}
          </div>
        </button>
      </form>
      <br />
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>Medyo mabagal mag-send, free hosting kasi hahaha. Please do not spam.</span>
      </div>
    </div>
  );
}

export default App;
