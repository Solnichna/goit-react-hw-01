// import React from 'react';
import FriendListItem from '../friendListItem/FriendListItem'; 

import './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friends-table">
      {friends.map((friend) => {
        return (
          <li key={friend.id} className="friend">
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>)
      }
      )}
    </ul>
  );
};

export default FriendList;
