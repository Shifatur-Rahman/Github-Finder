import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <nav className='navbar bg-primary'>
          <h2>
            <i className='fab fa-github' /> {this.props.title}
          </h2>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
        <h2>{this.props.content}</h2>
      </div>
    );
  }
}
