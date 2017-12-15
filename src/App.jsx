import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    this.state = {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };

    this.incrementTime = this.incrementTime.bind(this);
    setInterval(this.incrementTime, 1000);
  }

  incrementTime () {
    if(this.state.seconds < 59) {
      this.setState({ seconds: ++this.state.seconds })
    }
    //if seconds = 59, increment minutes, set seconds to 00
    if(this.state.seconds === 59) {
      this.setState({ minutes: ++this.state.minutes, seconds: 0 })
    }

    //if minutes = 59, increment hours, set minutes to 0
    if(this.state.minutes === 59) {
      this.setState({ hours: ++this.state.hours, minutes: 0 })
    }
  }

  render() {
    let ampm = 'AM';
    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;

    if(minutes < 10) {
      minutes = '0' + this.state.minutes;
    }

    if(seconds < 10) {
      seconds = '0' + this.state.minutes;
    }

    if(this.state.hours > 12) {
      ampm = 'PM';
      hours = this.state.hours - 12;
    }
    return (
      <div id='clock'>  { 'Time is: ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm }
      </div>
    )
  }
}

export default App;
