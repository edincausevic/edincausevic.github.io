import React, { Component } from 'react';
import { format } from 'path';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {

  state = {
    term: ''
  }

  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() { 
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input type="text"  
               value={this.state.term}
               className="form-control"
               placeholder="Get a five-day forecase in your favorite cities in US"
               onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit"
                  className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);