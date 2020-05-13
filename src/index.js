import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './Styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/reducer';
import App from './Components/App';
import {Provider} from 'react-redux';

const Store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={Store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
    