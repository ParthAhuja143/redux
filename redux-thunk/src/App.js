import './App.css';
import React, { Fragment } from 'react'
import Header from './components/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';
import { Provider } from 'react-redux'
import { configureStore } from './store';

const store = configureStore();

function App() {
  
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <ImageGrid />
      </Fragment>
    </Provider>
  );
}

export default App;
