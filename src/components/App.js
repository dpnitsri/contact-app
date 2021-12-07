import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

export const ContactContext = React.createContext();


const initialList = [];
const reducer = (state, action) => {
  switch (action.type) {
    case 'add': return [...state, {...action.contact,id:action.id}];

    case 'delete': {
      return state.filter((contact) => {
        return contact.id !== action.id;
      });
    }

    case 'update': {
      console.log("reducerstate",state);
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
  const [contactList,dispatch] = useReducer(reducer,initialList);

  return (
    <ContactContext.Provider value={{contacts:contactList, contactDispatch:dispatch}}>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path='/'
            element={ <ContactList /> }
          />
          <Route
            path='/add'
            element={ <AddContact /> }
          />
          <Route
            path='/edit'
            element={ <AddContact /> }
          />
        </Routes>
      </Router>
    </ContactContext.Provider>
  );
}

export default App;
