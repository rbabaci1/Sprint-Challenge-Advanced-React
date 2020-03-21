import React, { Component } from 'react';

export default class App extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/players');
    const dataList = await response.json();

    this.setState({ data: dataList });
  }

  render() {
    return <div className='App'></div>;
  }
}
