import React from 'react';
import { Switch, Route  } from "react-router-dom" 

import './App.css';

import Home from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  } 

    unsubscribeFromAuth = null;

    // life cycles : mount, updateMount, unmount

    render() {
      return (
        <div>
          HOLA CLASE 2
        </div>
      );
    }
  }

export default App;
