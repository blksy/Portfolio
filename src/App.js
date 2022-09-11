import './App.css';
import React from 'react';
import Particles from './Particles';
import Navigation from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Particles/>
    </div>
  );
}

export default App;
