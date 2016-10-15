import React from 'react';
import ReactDOM from 'react-dom';
// 'bootstrap/dist/css/bootstrap.css';
//import "bootstrap/scss/bootstrap.scss"
// Notice that we've organized all of our routes into a separate file.
import Router from './router';

//import {Header} from './components/header';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('root'));
//ReactDOM.render(<Header />, document.getElementById('root'));
