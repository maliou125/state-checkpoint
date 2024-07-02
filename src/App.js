import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'marwen',
        bio: 'trying to be  developer',
        imgSrc: 'https://img.freepik.com/vecteurs-libre/concept-developpement-web-programmeur-ar_107791-17049.jpg?w=996&t=st=1717084696~exp=1717085296~hmac=cafc479c10aedca76205f3cfae220ab0ed8873b50fb6207dd2800ff376a03eba',
        profession: 'Software developer'
      },
      shows: false,
      elapsedTime: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000); // Update every second
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
      elapsedTime: 0
    }), () => {
      if (this.state.shows) {
        this.startTimer();
      } else {
        this.clearTimer();
      }
    });
  }

  render() {
    const { person, shows, elapsedTime } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button className='vtn' onClick={this.toggleProfile}>
            {shows ? 'Hide' : 'Show'} Profile
          </button>
          {shows && (
            <div>
              <img class="image1" src={person.imgSrc} alt={person.fullName} />
              <h1>{person.fullName}</h1>
              <p>{person.bio}</p>
              <h2>{person.profession}</h2>
              <p>Elapsed time since last mounted: {elapsedTime} seconds</p>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;