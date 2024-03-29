import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Store
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
var store = createStore(appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, 
document.getElementById('content'));
serviceWorker.unregister();