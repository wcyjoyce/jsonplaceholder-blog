import React, { Component } from "react";
import { connect } from "react-redux";

// import { fetchPosts } from "../actions";
import { fetchPostsAndUsers } from "../actions";
import User from "./user.jsx";

class Posts extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="post" key={post.id}>
          <div className="content">
            <h3>{post.title}</h3>
            <h5><User userId={post.userId} /></h5>
            <p>{post.body}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="posts">
        <h1>JSONPlaceholder // Posts</h1>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// export default connect(mapStateToProps, { fetchPosts })(Posts);
export default connect(mapStateToProps, { fetchPostsAndUsers })(Posts);
