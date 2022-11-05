import React from 'react';
import './App.css';
import Menu from "../components/Menu/Menu";

function App() {
  const addOrder = (name: string) => {
    console.log('Adding', name);
  }

  return (
    <div className="App">
      <Menu addOrder={addOrder} />
    </div>
  );
}

export default App;
