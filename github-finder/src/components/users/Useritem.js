import React from 'react';
import {Link} from 'react-router-dom';

const Useritem = ({user: {login, avatar_url}}) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt=""
        style={{width: '60px'}}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default Useritem;
