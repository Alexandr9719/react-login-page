import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from './components/LoginForm/LoginForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginForm />, document.getElementById('root'));
registerServiceWorker();
