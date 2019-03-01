import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super();

    this.state = {
      title: "",
      img: "",
      content: "",
      username: "",
      profile_pic: ""
    };
  }

  //handleGetPost() {}

  render() {
    return (
      <div>
        Post
        <h3>{this.state.title}</h3>
        <h3>{this.state.username}</h3>
        <h3>{this.state.profile_pic}</h3>
      </div>
    );
  }
}

export default Post;
