var React = require('react');

var SignInForm = React.createClass({
  getInitialState: function() {
    return ({
      username: "",
      password: ""
    });
  },

  handleUsernameChange: function(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange: function(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit: function(event) {
    var user = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };
    UserUtil.createSession(user);
  },

  render: function() {
    return (
      <form className="signInForm" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
          id="username" />
        <br/>

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          id="password" />
        <br/>

        <input
          className="submitButton"
          type="submit"
          value="Sign In!" />

      </form>
    )
  }
});

module.exports = SignInForm;