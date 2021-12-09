import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



    

function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
