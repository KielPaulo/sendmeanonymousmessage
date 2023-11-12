import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };

  const handleLogButtonClick = () => {
    console.log(text);
  };

  return (
    <div>
      <h1>Send me anonymous message</h1>
      <textarea rows="4" cols="50" placeholder="Enter message here..." value={text} onChange={handleTextAreaChange} />
      <br />
      <button onClick={handleLogButtonClick}>Send</button>
    </div>
  );
}

export default App;
