import React from 'react';
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import Routes from './routes'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
    
  );
}

// import React from 'react'
// const App = () => (
  // <Provider store={store}>
  //   <Routes />
  // </Provider>
// )

// export default App

