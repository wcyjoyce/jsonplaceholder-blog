import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

class User extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) {
      return null;
    } else {
      return <div>{user.name}</div>
    };
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUser })(User);
