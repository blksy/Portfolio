import './App.css';
import React from 'react';
import Particles from './Particles';
import Navigation from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/about/AboutMe';
import Technologies from './screens/technologies/Technologies.js';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Particles/>
      <AboutMe/>
      <Technologies/>
    </div>
  );
}

export default App;
