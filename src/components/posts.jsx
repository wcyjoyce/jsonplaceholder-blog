import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="post" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="posts">
        <h1>Posts</h1>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
