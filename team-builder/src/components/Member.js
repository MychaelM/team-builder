import React from 'react';

const Member = (props) => {
  
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.role}</p>
    </div>
  )
}

export default Member;