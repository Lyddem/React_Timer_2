import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    let date = new Date();
    let hours = date.getHours();
    let minutes =  date.getMinutes();
    let seconds = date.getSeconds();

    this.state = {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
    // this.incrementTime = this.incrementTime.bind(this);
    // setInterval(this.incrementTime, 1000);
  }

  componentWillMount() {
    setInterval(this.incrementTime.bind(this), 1000);
  }

  incrementTime() {
    //increment seconds
    if(this.state.seconds < 59) {
      this.setState({ seconds: ++this.state.seconds});
    }

    //increment minutes when seconds = 59, reset seconds to 0
      if(this.state.seconds === 59) {
        this.setState({minutes: ++this.state.minutes })
        this.setState({seconds: 0 })
      }
      console.log('working')
    //increment hour when minutes = 59
     if(this.state.minutes === 59) {
        this.setState({hours: ++this.state.hours })
      }
  }

  render() {
    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;
    let ampm = 'AM';

    if(this.state.seconds < 10) {
      seconds = '0' + this.state.seconds;
    }

    if(this.state.minutes < 10) {
      minutes = '0' + this.state.minutes;
    }

    if(this.state.hours > 12) {
      hours = this.state.hours - 12;
      ampm = 'PM'
    }

    return (
      <div id='clock'>
        Time is: { hours + ':' + minutes + ':' + seconds + ' ' + ampm }
      </div>
    );
  }
}

export default App;
