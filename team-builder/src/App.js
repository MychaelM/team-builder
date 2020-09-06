import React, { useState } from 'react';
import memberList from './memberList';
import Member from './components/Member';
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
        {/* <h2>List Members</h2> */}
        {members.map((member) => (
          <Member key={member.id} name={member.name} role={member.role}/>
        ))}
      </div>
    </div>
  );
}

export default App;
