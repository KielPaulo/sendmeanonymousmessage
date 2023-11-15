import React, { useState } from 'react';
import axios from 'axios';
import avatar from './images/facebook_1700059457031_7130566180867377246.jpg';

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
      <div className="p-4 md:p-8 max-w-md w-full relative">
        <div class="avatar absolute top-1 left-20">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col">
            <div className="w-full p-8 bg-blue text-center rounded-tr-xl rounded-tl-xl">Pao Ro</div>
            <div className="w-full border-x border-b border-gray-300 p-8 bg-white text-gray-400 text-center">
              Medyo mabagal mag-send, free hosting kasi hahaha. Please do not spam.
            </div>
          </div>
          <div className="flex items-end bg-white border-b border-x border-gray-300 rounded-br-xl rounded-bl-xl p-2">
            <textarea
              style={textareaStyles}
              className="textarea w-full resize-none focus:outline-none border-none bg-white caret-black"
              rows="1"
              placeholder="Type your message here..."
              value={emailContent}
              autoFocus={true}
              onChange={(e) => setEmailContent(e.target.value)}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
            <button className="btn btn-primary" type="submit" disabled={submitting}>
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
