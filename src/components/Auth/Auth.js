import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "./../../ducks/reducer";
import { timingSafeEqual } from "crypto";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  componentDidMount() {
    this.checkUser();
  }

  checkUser = async () => {
    const { id } = this.props;
    if (!id) {
      try {
        let res = await axios.get("/api/current");
        this.props.updateUser(res.data);
        this.props.history.push("/");
      } catch (err) {}
    } else {
      this.props.history.push("/dashboard");
    }
  };

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  async register() {
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    try {
      let res = await axios.post("/api/auth/register", user);
      this.props.history.push("/dashboard");
    } catch (err) {
      alert("Username taken, choose a different username");
    }
  }

  login = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    try {
      let res = await axios.post("/api/auth/login", user);
      this.props.updateUser(res.data);
      this.props.history.push("/dashboard");
    } catch (err) {
      alert("Incorrect username or password");
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          value={username}
          onChange={e => this.handleChange("username", e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handleChange("password", e.target.value)}
        />
        <button onClick={this.register}>Register</button>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    id: reduxState.id
  };
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
