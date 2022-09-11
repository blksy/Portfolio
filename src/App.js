import './App.css';
import React from 'react';
import Particles from './Particles';
import Navigation from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/about/AboutMe';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Particles/>
      <AboutMe/>
    </div>
  );
}

export default App;
