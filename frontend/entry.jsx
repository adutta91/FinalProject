// React requires
var React = require('react');
var ReactDOM = require('react-dom');

// React router and routes
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
// import { IndexRoute } from 'react-router'
// stores
var UserStore = require('./stores/userStore');

// React components
var UserProfile = require('./components/users/userProfile');
var SongForm = require('./components/songs/songForm');
var LogIn = require('./components/users/logIn');
var LoggedInApp = require('./components/app/app');
var Header = require('./components/header/header');
var SongProfile = require('./components/songs/songProfile');


window.UserStore = UserStore;

var App = React.createClass({

  getInitialState: function() {
    return ({
      user: UserStore.currentUser()
    });
  },

  checkForLogIn: function() {
    var user = this.state.user;
    if (user === null) {
      this.props.history.push('/api/session/new');
    } else {
      this.setState({ user: UserStore.currentUser() });
    }
  },

  _onChange: function() {
    if (!UserStore.loggedIn()) {
      this.props.history.push('/api/session/new');
    } else {
    }
  },

  componentDidMount: function() {
    this.checkForLogIn();
    this.listener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

var appRoutes = (
  <Route path='/' component={App}>
    <IndexRoute component={LoggedInApp} />
    <Route path='/api/songs/new' component={SongForm} />
    <Route path='/api/session/new' component={LogIn} />
    <Route path='/api/users/:id' component={UserProfile} />
    <Route path='/api/songs/:id' component={SongProfile} />
  </Route>
);


// Load onto document
document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");

  ReactDOM.render(<Router>{appRoutes}</Router>, root);

});
