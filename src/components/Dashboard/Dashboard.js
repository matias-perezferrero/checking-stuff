import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";
import Post from "../Post/Post";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      search: "",
      userposts: true
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const { id } = this.props;
    if (!id) {
      try {
        let res = await axios.get("/api/current");
        this.props.updateUser(res.data);
      } catch (err) {
        this.props.history.push("/");
      }
    }
  };

  handleInputChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleCheck = () => {
    this.setState({
      userposts: !this.state.userposts
    });
  };

  handleSearchClick = () => {};

  render() {
    console.log(this.state.userposts);
    const mappedPosts = this.state.posts.map(post => {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div>
        <h1>Dashboard</h1>
        {mappedPosts}
        <input placeholder="search here" onChange={this.handleInputChange} />
        <button onClick={this.handleSearch}>Search</button>
        <button>Reset</button>
        <input type="checkbox" name="my-posts" onChange={this.handleCheck} />
        <label htmlFor="my-posts">My Posts Only</label>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
