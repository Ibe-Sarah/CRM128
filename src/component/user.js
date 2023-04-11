import React from 'react';

function UserInfo(props) {
  const { name, position } = props;
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');
  return (
    <div className="user-info ml-auto">
      <div className="initials">{initials}</div>
      <div style={{fontWeight:'bolder'}} className="name">{name}</div>
      <div style={{fontWeight:'lighter'}} className="position">{position}</div>
    </div>
  );
}

export default UserInfo;
