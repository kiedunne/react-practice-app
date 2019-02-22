
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import register from './registerServiceWorker';
import Counters from './components/counters'

ReactDOM.render(<Counters />, document.getElementById('root'));
