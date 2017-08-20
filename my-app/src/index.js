import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './containers/Hello'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
        <Hello/>
    </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
