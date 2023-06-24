import React from 'react';

const User = ({user}) => {
  return (
    <div>
      <p>First Name: {user.name.first}</p>
      <p>Last Name: {user.name.last}</p>
      <hr />
    </div>
  )
}

export default User
