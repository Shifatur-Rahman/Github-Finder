import React from "react";
import Useritem from "./Useritem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const User = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(temp => (
          <Useritem key={temp.id} temp={temp} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

User.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default User;
