import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {PivotalTrackerRepository} from "./PivotalTrackerRepository";

ReactDOM.render(
  <App
    pivotalTrackerRepository={new PivotalTrackerRepository()}
  />,
  document.getElementById('root'));
serviceWorker.unregister();
