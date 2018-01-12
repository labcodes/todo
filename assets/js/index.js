import React, { Component } from 'react';

import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
      return (
      <div>
          <h1>To-Do List App rendered by React in Django</h1>
      </div>);
  }
}


ReactDOM.render(<App />, document.getElementById('react-app'));
