import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please Enter Something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: " " });
    }
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Users name'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-block btn-light'
            onClick={this.props.clearUser}
          >
            ClearUser
          </button>
        )}
      </div>
    );
  }
}

export default Search;
