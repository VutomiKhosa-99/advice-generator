import React from 'react';
import axios from 'axios';


import './App.css';
import logo from "./app-logo1.png"

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="website logo" className="App-logo" />
          <p>Click "GIVE ME ADVICE" button to get random cool advice. </p>
        <div className="card">
          <h2 className="heading">{this.state.advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
        </header>
      </div>
      
    );
  }
}

export default App;