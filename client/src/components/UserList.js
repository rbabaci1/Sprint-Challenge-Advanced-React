import React from 'react';

import UserCard from './UserCard';
import useDarkMode from '../hooks/useDarkMode';

export default function UserList({ userList }) {
  const [isOnDarkMode, switchDarkMode] = useDarkMode(false);

  return (
    <div className='list-wrapper'>
      {userList.map((user, index) => (
        <UserCard user={user} key={index} />
      ))}
    </div>
  );
}
