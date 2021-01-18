import React, { useState } from 'react';

const MemberForm = (props) => {
  // console.log('Props for MemberForm: ', props);
  const [member, setMember] = useState({
    name: '',
    role: '',
    email: ''
  });

  const changeHandler = (e) => {
    // console.log(e.target.name);

    setMember({
      ...member,
      [e.target.name]: e.target.value
    })
    // console.log(member);
  }

  const submitForm = (e) => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({
      name: '',
      role: '', 
      email: ''
    })
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input 
      type="text"
      name='name'
      value={member.name}
      onChange={changeHandler}
      />
      <br/>

      <label htmlFor="role">Role: </label>
      <input 
      type="text"
      name='role'
      value={member.role}
      onChange={changeHandler}
      />
      <br/>

      <label htmlFor="email">Email: </label>
      <input 
      type="email"
      name='email'
      value={member.email}
      onChange={changeHandler}
      />
      <br/>

      <button type="submit">Add New Member</button>
    </form>
  )

}

export default MemberForm;