import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { clearUser } from "../../ducks/reducer";

async function logout(props) {
  props.clearUser();
  await axios.post("/api/auth/logout");
  props.history.push("/");
}

function Nav(props) {
  if (props.location.pathname !== "/") {
    return (
      <div>
        <h1>Nav</h1>
        <img src={props.profile_pic} alt="user" />
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>New Post</button>
        </Link>
        <button onClick={() => logout(props)}>Logout</button>
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

const mapDispatchToProps = {
  clearUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
