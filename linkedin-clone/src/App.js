import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        {/* App Body */}
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
      
    </div>
  );
}

export default App;