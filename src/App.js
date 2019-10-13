import React, { Component } from 'react';
import './App.css';
import PlusButton from './PlusButton/PlusButton';
import MinusButton from './MinusButton/MinusButton';
import Labels from './Labels/Labels'
import TimerInput from './TimerInput/TimerInput'
import logo from './logo.svg';


//! css
const lime = { background: '#61b812' };
const orange = { background: '#e76022' };
const blue = { background: '#1E90FF' };
const redgay = { background: '#DA312E' }
const bluefish = { background: '#02b9e3' }
// const magenta = { background: '#d22a4e' }
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      value: 0,
      timer: null
    }
    this.setCounter = this.setCounter.bind(this);

  }

  updateCount = () => {
    const { count, value } = this.state

    if (count > 0) {
      this.setState(({ count }) => ({
        count: count - 1
      }))
    }
    if (count === 0) {
      if (value === 0) {
        clearInterval(this.myInterval)
      } else {
        this.setState(({ value }) => ({
          value: value - 1,
          count: 59
        }))
      }
    }
  }

  startTimer = () => {
    this.setState({
      timer: setInterval(this.updateCount, 1000)
    });
  };

  stopTimer = () => {
    clearInterval(this.state.timer);
    this.setState({
      timer: null
    });
  };

  resetClick = () => {
    this.setState({
      count: 0,
      value: 0
    });
  }

  setCounter = (index) => {
    let time;
    switch (index) {
      case 1:
        time = 1;
        break;
      case 2:
        time = 5;
        break;
      case 3:
        time = 10;
        break;
      case 4:
        time = 15;
        break;
      case 5:
        time = 30;
        break;
      case 6:
        time = 60;
        break;
      default: time = 0;
    }
    let times = time;
    this.setState({
      value: times
    })
  }

  getNewInput = event => {
    console.log(event)
    this.setState({
      value: event.target.value
    });
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { count, value } = this.state

      if (count > 0) {
        this.setState(({ count }) => ({
          count: count - 1
        }))
      }
      if (count === 0) {
        if (value === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ value }) => ({
            value: value - 1,
            count: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }


  render() {

    return (

      <div className="AppContainer">
        <header>
          <h1>Start</h1>
          <article className="AppRight">
            <h2>William</h2>
            <h2>Fowler</h2>
          </article>
        </header>
        <Labels
          cb={this.setCounter}
        />

        <section>
          <h2 className="AppWide" style={lime}>React Timer Lab</h2>
          <img className="AppBox" style={redgay} src={logo} alt="logo" />
          <img className="AppWide" style={orange} src={logo} alt="logo" />

          <article className="AppWide">
            <h1> {this.state.value}:{this.state.count < 10 ? `0${this.state.count}` : this.state.count}</h1>
          </article>

          <button className="AppBox" style={blue} onClick={this.startTimer} disabled={this.state.timer}>
            <h2>Start</h2>
          </button>
          <button className="AppBox" style={bluefish} onClick={this.stopTimer} disabled={!this.state.timer}>
            <h2>Stop</h2>
          </button>
          <button className="AppBox" style={lime} onClick={this.resetClick}>
            <h2>Reset</h2>
          </button>
          <PlusButton count={this.state.count} increaseCount={(count) => this.setState({ count })} />
          <MinusButton count={this.state.count} decreaseCount={(count) => this.setState({ count })} />
          <TimerInput
            newInput={this.getNewInput}
          />
          <img className="AppBox" style={redgay} src={logo} alt="logo" />
        </section>
      </div>
    )
  }
}

export default App;




