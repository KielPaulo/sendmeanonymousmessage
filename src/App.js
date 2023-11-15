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

  const textareaStyles = {
    height: 'auto',
    overflow: 'hidden'
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 md:p-8 max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full border-b border-gray-500 p-4 bg-white text-gray-400 text-center z-10">
              The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
            </div>
            <textarea
              style={textareaStyles}
              className="textarea textarea-bordered textarea-lg w-full resize-none pt-20 focus:outline-none z-0"
              rows="1"
              placeholder="Type your message here"
              value={emailContent}
              autoFocus={true}
              onChange={(e) => setEmailContent(e.target.value)}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
          </div>
          <br />
          <button className="btn btn-primary w-full relative" type="submit" disabled={submitting}>
            <div className="flex items-center">
              {submitting ? 'Sending' : 'Send'}
              {submitting && <span className="loading loading-bars loading-sm ml-2"></span>}
            </div>
          </button>
        </form>
        <br />
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Medyo mabagal mag-send, free hosting kasi hahaha. Please do not spam.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
