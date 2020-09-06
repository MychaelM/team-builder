import React, { useState } from 'react';
import members from '../memberList';

const MemberForm = (props) => {
  console.log('Props for MemberForm: ', props);

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input 
      type="text"
      name='name'
      value={members.name}
      />
      <label htmlFor="role">Role: </label>
      <input 
      type="text"
      name='role'
      value={members.role}
      />

      <button type="submit">Add New Member</button>
    </form>
  )

}

export default MemberForm;