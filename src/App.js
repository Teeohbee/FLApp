import React from 'react';
import './App.css';
// import { getProfessions } from './Professions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCharacterCreationForm: false,
    }
  }

  onSubmit() {
    this.setState(
      { showCharacterCreationForm: true }
    )
  }

  onCreateCharacter() {
    debugger;
    this.setState({
      character: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          FABLED LANDS
        </header>
        <section>
          {
            renderComponents(this)
          }
        </section>
      </div>
    );
  }
}

class CreateCharacter extends React.Component {
  render() {
    return (
      <form onSubmit={() => this.props.onCreateCharacter()}>
        <label> Name:
          <input type='text'></input>
        </label>
        <label> Profession:
          {getProfessions().map((profession, index) => 
            <ProfessionRadio profession={profession} key={index}/>
          )}
        </label>
        <button>Create Character</button>
      </form>
    )
  }
}

function ProfessionRadio(props) {
  return (
    <div className='profession-radio'>
      <input type="radio" value={props.profession} name='profession'/>
      <label>{props.profession}</label>
    </div>
  )
}

function getProfessions() {
  return ['warrior', 'rogue', 'priest', 'troubador', 'wayfarer', 'mage']
}

function renderComponents(self) {
  if(self.state.character) {
    return "Hello Character"
  }
  if(self.state.showCharacterCreationForm === false) {
    return <form onSubmit={() => self.onSubmit()}>
            <button>New Character</button>
          </form>
  }
  if(self.state.showCharacterCreationForm === true) {
    return <CreateCharacter onCreateCharacter={self.onCreateCharacter}/>
  }
}

export default App;
