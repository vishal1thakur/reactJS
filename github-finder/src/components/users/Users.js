import React, {Component} from 'react';
import Useritem from './Useritem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Users = ({users, loading}) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

Useritem.prototype = {
  user: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
