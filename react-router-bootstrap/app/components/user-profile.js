import React from 'react';

const UserProfile = ( {params}) => {
  return (<h1>User Profile for userId: {params.userId}</h1>);
};
export default UserProfile;
