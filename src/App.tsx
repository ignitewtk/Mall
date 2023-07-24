import React from 'react';
import logo from './logo.svg';
import './App.css';
import Theme from './components/Theme';

type Props = {
  message: string
}

function App() {
  return (
    <div className="App">
      <Theme />
    </div>
  );
}

export default App;
