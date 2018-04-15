import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Components
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
// Routes
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route path="/" component={Header} />
            <Route exact path="/" component={Login} />
            <Route path="/" component={Footer} />
        </div>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
