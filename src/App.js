import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User.js";
import Search from "./components/users/Search.js";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Users from "./components/users/Users.js";
import axios from "axios";

export default class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };
  // async componentDidMount() {
  // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  // this.setState({ loading: true });
  // }
  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });
    var obj = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: obj.data.items, loading: false });
  };

  // Get a single Github User

  getUser = async username => {
    this.setState({ loading: true });
    var obj = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: obj.data, loading: false });
  };

  //Clear Users

  clearUser = () => {
    this.setState({ users: [], loading: false });
  };

  // Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUser={this.clearUser}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <User
                      users={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />

              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/users/:login'
                render={props => (
                  <Users
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
