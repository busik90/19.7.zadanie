import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';
import App from './App/App';
import { comments } from './actions';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(comments.add('pierwszy komentarz'));
store.dispatch(comments.add('drugi komentarz'));
store.subscribe(() => console.log(store.getState()));