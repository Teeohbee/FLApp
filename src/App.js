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
                <button>New Character</button>
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
      <form>
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

export default App;
