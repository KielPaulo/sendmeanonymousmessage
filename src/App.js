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
      <div className="p-4 md:p-8 max-w-md w-full relative ">
        <form onSubmit={handleSubmit} className="relative">
          <div className="absolute rounded-t-lg top-0 left-0 w-full border-b border-gray-500 p-4 bg-white text-gray-400 text-center z-10">
            Medyo mabagal mag-send, free hosting kasi hahaha. Please do not spam.
          </div>
          <div className="relative">
            <textarea
              style={textareaStyles}
              className="textarea textarea-bordered textarea-lg w-full resize-none pt-20 pb-12 focus:outline-none z-0"
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
            <button className="btn btn-primary absolute bottom-2 right-2" type="submit" disabled={submitting}>
              <div className="flex items-center">
                {submitting ? 'Sending' : 'Send'}
                {submitting && <span className="loading loading-bars loading-sm ml-2"></span>}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
