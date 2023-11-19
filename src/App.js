import React, { useState } from 'react';
import axios from 'axios';
import avatar from './images/facebook_1700059457031_7130566180867377246.jpg';
import sendIcon from './images/send (2).svg';
import './App.css';

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
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col">
            <div className="w-full p-10 bg-blue rounded-tr-xl rounded-tl-xl relative">
              <div class="avatar absolute bottom-4 left-8">
                <div class="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
              <div className="absolute bottom-8 left-36 text-white">Hi, I'm Pao!</div>
            </div>
            <div className="w-full border-b border-x border-gray-300 p-8 bg-white text-gray-400 text-center">
              This is my personal web app project. It's a bit slow to send messages since I'm using free hosting XD. Please refrain from
              spamming.
            </div>
          </div>
          <div className="flex items-end bg-white border-b border-x border-gray-300 rounded-br-xl rounded-bl-xl p-2">
            <textarea
              style={textareaStyles}
              className="textarea w-full resize-none focus:outline-none border-none bg-white caret-black"
              rows="1"
              placeholder="Send me anonymous message here..."
              value={emailContent}
              autoFocus={true}
              onChange={(e) => setEmailContent(e.target.value)}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
            <button className="p-2" type="submit" disabled={submitting}>
              <div className="flex items-center">
                {submitting ? (
                  <span className="loading loading-bars loading-sm ml-2"></span>
                ) : (
                  <img src={sendIcon} alt="Send Message" className="hover:opacity-50 cursor-pointer fill-current" />
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
