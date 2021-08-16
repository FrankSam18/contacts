import React, { Component } from "react";
import ContactsForm from "./Component/ContactsForm";
import "./App.css";
import ContactsList from "./Component/ContactsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Kwesi",
          phoneNumber: "0599337882",
          location: "Adenta",
        },
        {
          name: "Sarah",
          phoneNumber: "0246588233",
          location: "Kpone",
        },
        {
          name: "Akomiah",
          phoneNumber: "0542335612",
          location: "Airport Hills",
        },
        {
          name: "Genia",
          phoneNumber: "0246712461",
          location: "East Legon",
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  handleDeleteContact = (contactId) => {
    const contactSaved = this.state.contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    this.setState({ contacts: contactSaved });
  };

  handleEditContact = (updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      ),
    });
  };

  render() {
    return (
      <div className="completeContact">
        <ContactsForm addContact={this.handleAddContact} />
        <ContactsList
          contacts={this.state.contacts}
          deleteContact={this.handleDeleteContact}
          editContact={this.handleEditContact}
        />
      </div>
    );
  }
}

export default App;
