import './App.css';

import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('Initial value');

  // 👇️ called every time input's value changes
  const handleChange = event => {
    setMessage(event.target.value);
  };

  console.log(message);

  return (
    <div>
      <input
        id="message"
        name="message"
        type="text"
        onChange={handleChange}
        value={message}
      />
    </div>
  );
};

export default App;
