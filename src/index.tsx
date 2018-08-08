import './infrastructure/orm-setup';

import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
);


