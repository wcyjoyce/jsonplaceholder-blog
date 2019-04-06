import React, { Component } from "react";
import { connect } from "react-redux";

// import { fetchUser } from "../actions";

class User extends Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    } else {
      return <div>{user.name}</div>
    };
  }
}

function mapStateToProps(state, ownProps) {
  return { user: state.users.find(user => user.id === ownProps.userId) };
}

// export default connect(mapStateToProps, { fetchUser })(User);
export default connect(mapStateToProps)(User);
