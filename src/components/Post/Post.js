import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  constructor(props) {
    super(props);

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
    console.log(this.props);
    return (
      <div>
        Post
        <h3>{this.props.post.title}</h3>
        <h3>{this.props.post.img}</h3>
        <h3>{this.props.post.content}</h3>
        <h3>{this.props.username}</h3>
        <h3>{this.props.profile_pic}</h3>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps)(Post);
