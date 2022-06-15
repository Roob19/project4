import React from 'react';
import {useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import { useBusinessSearch } from '../../utilities/yelp-api';
import Search from '../../components/Search';

import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <Search location={location}/>
      </main>
    </div>
  );
}

export default App;
