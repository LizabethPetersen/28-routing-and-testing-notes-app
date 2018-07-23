import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';
// import NoteItem from '../note-item/note-item';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
          <BrowserRouter>
            <div id="gradient">
              <header>
                <h1>To-Do: <br/>Note Reminder App</h1>
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Write a Note</Link></li>
                    <li><Link to="/note-item">Itemized Notes</Link></li>
                  </ul>
                </nav>
              </header>
              <Route
              exact
              path="/"
              component={ Landing }
              />
              <Route
              exact
              path="/dashboard"
              component={ Dashboard }
              />
            </div>
          </BrowserRouter>
      </div>   
    );
  }
}
