import React, {useState} from 'react';
import './App.css';

function App() {
  const [passwords, setPasswords] = useState([]);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const addPassword = (e) => {
    e.preventDefault();
    const newPasswords = [...passwords, [ password1 ]];
    setPasswords(newPasswords);
    setPassword1('');
    setPassword2('');
  };
  return (
    <div className="App">
      <input type="password" id="pwd" value={password1} onChange={e => setPassword1(e.target.value)} /><br/>
      <input type="password" id="retype" value={password2} onChange={e => setPassword2(e.target.value)} /><button onClick={e => addPassword(e)} >Add</button>
      <ul>
        {passwords.map((pw) => 
          <li key={pw}>
            {pw}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
