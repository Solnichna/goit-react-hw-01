// import React from 'react';
import FriendListItem from '../friendListItem/FriendListItem'; 

import './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend, index) => (
        <li key={index}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
