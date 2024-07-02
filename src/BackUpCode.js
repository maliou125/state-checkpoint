import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'marwen',
        bio: 'developer',
        imgSrc: 'https://img.freepik.com/vecteurs-libre/concept-developpement-web-programmeur-ar_107791-17049.jpg?w=996&t=st=1717084696~exp=1717085296~hmac=cafc479c10aedca76205f3cfae220ab0ed8873b50fb6207dd2800ff376a03eba',
        profession: 'Software dev'
      },
      shows: false
    };
  }

  render() {
    const { person, shows } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setState({ shows: !shows })}>
            {shows ? 'Hide' : 'Show'} Profile
          </button>
          {shows && (
            <div>
              <img src={person.imgSrc} alt={person.fullName} />
              <h1>{person.fullName}</h1>
              <p>{person.bio}</p>
              <h2>{person.profession}</h2>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;