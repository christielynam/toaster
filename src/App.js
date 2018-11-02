import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

const Toaster = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px 25px 5px 5px;
  background-color: silver
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      toastColor: '',
      counter: 15,
      randomNum: null
    }
  }

  countDown = () => {
    this.setState({ counter: this.state.counter - 1 })
    if(this.state.counter < 1) { 
      clearInterval(this.timer);
    }
  }

  setToastColor = (num) => {
    if(num > 10) {
      this.setState({ toastColor: 'light' })
    }
    if(num < 11 && num > 5) {
      this.setState({ toastColor: 'medium' })
    }
    if(num < 6) {
      this.setState({ toastColor: 'dark'})
    }
  }

  toastDone = () => {
    const num = Math.floor(Math.random() * 16)
    this.setState({ randomNum: num })
    this.setToastColor(num)
    if(num === this.state.counter) {

    }
  }

  componentDidMount() {
    this.timer = setInterval(this.countDown, 1000);
    this.toastDone()
  }

  render() {
    const { counter, randomNum } = this.state
    return (
      <Toaster>
        <div 
          className={`${this.state.toastColor} toast`}
          style={{visibility: randomNum >= counter ? 'visible' : 'hidden'}}
        >
        </div>
        <h2>{counter}</h2>
      </Toaster>
    );
  }
}

export default App;
