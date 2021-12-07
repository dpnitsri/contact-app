import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';


const initialList = [];
const reducer = (state, action) => {
  switch (action.type) {
    case 'add': return [...state, { ...action.contact, id: action.id }];

    case 'delete': {
      return state.filter((contact) => {
        return contact.id !== action.id;
      });
    }

    case 'update': {
      console.log("reducerstate", state);
      return state.map((card) => {
        if (card.id === action.contact.id) {
          card.name = action.contact.name;
          card.email = action.contact.email;
        }
        return card;
      });
    }
  }
}
function App() {
  const [contactList, dispatch] = useReducer(reducer, initialList);
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: uuid() }]);
    dispatch({ type: 'add', contact: contact, id: uuid() });
    console.log(contactList);
    console.log(contacts);
  }

  const updateContactHandler = (contact) => {
    contacts.map((card) => {
      if (card.id === contact.id) {
        card.name = contact.name;
        card.email = contact.email;
      }
      return card;
    });

    contactList.map((card) => {
      if (card.id === contact.id) {
        card.name = contact.name;
        card.email = contact.email;
      }
      return card;
    })
    console.log(contactList);
    console.log('contacts', contacts);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    dispatch({ type: 'delete', id: id });
    console.log('delete', contactList);
    setContacts(newContactList);
  }


  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact path='/'
          element={
            <ContactList
              contacts={contacts} contactList={contactList}
              removeContact={removeContactHandler}
            />
          }
        />
        <Route
          path='/add'
          element={
            <AddContact
              addContactHandler={addContactHandler}
            />
          }
        />
        <Route
          path='/edit'
          element={
            <AddContact
              updateContactHandler={updateContactHandler}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
