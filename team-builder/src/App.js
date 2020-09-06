import React, { useState } from 'react';
import memberList from './memberList';
import './App.css';

function App() {

  const [members, setMembers] = useState(memberList);
  console.log(members);

  return (
    <div className="App">
      <header>
        <h1>Members</h1>
      </header>
      <div>
        <h2>List Members</h2>
      </div>
    </div>
  );
}

export default App;
