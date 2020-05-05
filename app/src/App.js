import React, { useState, useEffect, useRef } from 'react';


function App() {
  const [passwords, setPasswords] = useState([]);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const passwordE1 = useRef(null);
  useEffect(() => {
    passwordE1.current.focus();
  }, []);
  const addPassword = (e) => {
    e.preventDefault();
    const newPasswords = [...passwords, [password1]];
    setPasswords(newPasswords);
    setPassword1('');
    setPassword2('');
    passwordE1.current.focus();
  };
  return (
    <div class="container">
      <h1>Password scraper</h1>
      <form>
        <div class="form-group">
          <input type="password" ref={passwordE1} id="pwd" class="form-control" value={password1} onChange={e => setPassword1(e.target.value)} />
        </div>
        <div class="form-group">
          <input type="password" id="retype" class="form-control" value={password2} onChange={e => setPassword2(e.target.value)} />
        </div>
        <button class="btn btn-primary btn-lg btn-block" onClick={e => addPassword(e)} >Add</button>
      </form>
      <h3>Count: {passwords.length}</h3>
      <ul class="list-group">
        {passwords.map((pw) =>
          <li class="list-group-item" key={pw}>
            {pw}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
