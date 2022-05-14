import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);'

const API_KEY = 'AIzaSyBB17EWI3M4nH1TIe7wdFkMHLnJJlBUcLE';


// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

// Create a new component. This component should produce some HTML
const App = () => {
  
  return <div>
    <SearchBar />
  </div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));





