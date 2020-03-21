import React from 'react';
import UserCard from './UserCard';

export default function UserList({ userList }) {
  return (
    <div className='list-wrapper'>
      {userList.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}
