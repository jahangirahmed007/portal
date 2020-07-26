import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Reducer from './Reducers/index';
import thunk from 'redux-thunk';
import { getCurrentUser } from './Actions';
import setAuthToken from './services/SetAuthToken';

const store = createStore(Reducer, applyMiddleware(thunk));

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    store.dispatch(getCurrentUser());
}
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>


    , document.getElementById('root'));