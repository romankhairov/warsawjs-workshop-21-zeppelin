import React from "react";
import { login } from "../actions/user";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
  fetching: state.user.fetching,
  username: state.user.username,
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password} = this.state;

    this.props.dispatch(login(username, password));

  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {

    if (!this.props.fetching) {
    return (
      <form onSubmit = {this.onSubmit}>
        <h1>Login</h1>

        <input
        type="text"
        placeholder="username"
        value = {this.state.username}
        onChange={this.onChangeUsername}
        />
        <input
        type="password"
        placeholder="password"
        value = {this.state.password}
        onChange={this.onChangePassword}
        />

        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    )
  } else {
    return (<div>
        Loading...
      </div>)
}
}
}

export default connect(mapStateToProps) (Login);
