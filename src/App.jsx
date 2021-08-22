import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
// import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Aosie Simpson", number: "459-12-56" },
      { id: "id-3", name: "Bosie Simpson", number: "459-12-56" },
      { id: "id-4", name: "Cosie Simpson", number: "459-12-56" },
    ],
  };

  fomrSubmitHandler = (data) => {
    console.log(data);
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  render() {
    return (
      <div className="App">
        <h3>Phonebook</h3>
        <Form onSubmit={this.fomrSubmitHandler} />
        <h3>Contacts</h3>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
