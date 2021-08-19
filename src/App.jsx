import './App.css';
import React, { Component } from 'react';
import { v4} from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <div className="App">
        <h2>Name</h2>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
        />
        <button>Add contact</button>
      </div>)
    }
  
}

export default App;
