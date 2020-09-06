import React, { useState } from 'react';
import memberList from './memberList';
import MemberForm from './components/MemberForm';
import Member from './components/Member';
import './App.css';

function App() {

  const [members, setMembers] = useState(memberList);
  // console.log(members);

  const addNewMember = (formData) => {
    const newMember = {
      id: Date.now(),
      name: formData.name,
      role: formData.role
    }

    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <header>
        <h1>Members</h1>
      </header>
      <MemberForm addNewMember={addNewMember}/>
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
