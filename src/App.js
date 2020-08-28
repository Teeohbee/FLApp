import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCharacterCreationForm: false,
    }
    // this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    this.setState(
      { showCharacterCreationForm: true }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          FABLED LANDS
        </header>
        <section>
          {
            this.state.showCharacterCreationForm
            ? <CreateCharacter />
            : <form onSubmit={() => this.onSubmit()}>
                <button>Create</button>
              </form>
          }
        </section>
      </div>
    );
  }
}

class CreateCharacter extends React.Component {
  render() {
    return (
      <div>Hello I'm a character creation form!</div>
    )
  }
}

export default App;
