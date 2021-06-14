import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';


function App() {
  return (
    //BEM Naming Convention
    <div className="app">
     <div className="app__body">
      <Sidebar />
      <Chat />
     </div>
    </div>
  );
}

export default App;
