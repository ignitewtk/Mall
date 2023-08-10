import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store'
import logo from './logo.svg';
import './App.css';
import Theme from './components/Theme';

type Props = {
  message: string
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Theme />
      </div>
    </Provider>
    
  );
}

export default App;
