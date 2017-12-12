import React from 'react';
import reactDOM from 'react-dom';
import App from './App.jsx';

class Index extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

reactDOM.render(<Index />, document.getElementById('app'));