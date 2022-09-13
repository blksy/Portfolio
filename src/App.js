import './App.css';
import React from 'react';
import Particles from './Particles';
import Navigation from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/about/AboutMe';
import Technologies from './screens/technologies/Technologies.js';
import ContactMe from './screens/contactMe/ContactMe'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Particles/>
      <AboutMe/>
      <Technologies/>
      <ContactMe/>
    </div>
  );
}

export default App;
