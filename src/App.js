import './App.css';
import React from 'react';
import Particles from './Particles';
import Navigation from './screens/navigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Particles/>
    </div>
  );
}

export default App;
