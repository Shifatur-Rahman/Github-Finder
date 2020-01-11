import React from "react";
import { Link } from "react-router-dom";

const Useritem = ({ temp: { avatar_url, html_url, login } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='img'
        style={{ width: "60px" }}
        className='round-img'
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className='btn btn-dark'>
          More
        </Link>
      </div>
    </div>
  );
};

export default Useritem;
