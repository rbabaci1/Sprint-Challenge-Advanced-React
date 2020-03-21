import React, { Component } from 'react';
import UserCard from './UserCard';

export default class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(dataList => this.setState({ data: dataList }))
      .catch(err => console.error(err));
  }

  render() {
    return <div className='App'></div>;
  }
}
