import React, { Component } from 'react';

import UserList from './components/UserList';

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
    return (
      <div className='App'>
        <UserList userList={this.state.data} />
      </div>
    );
  }
}
