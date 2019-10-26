import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Map from './components/Map'

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Map/>
    </div>
  );
}

export default App;
