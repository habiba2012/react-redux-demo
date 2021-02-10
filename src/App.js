import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeProcessing from './components/CakeProcessing'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeProcessing/>
      </div>
    </Provider>
  );
}

export default App;
