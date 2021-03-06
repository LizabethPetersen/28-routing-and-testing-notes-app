import uuid from 'uuid/v4';
import React from 'react';
import CreateNoteForm from '../create-note-form/create-note-form';
import NoteItem from '../note-item/note-item';
import { renderIf } from '../../lib/utils';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      error: null,
    };
  }

  handleAddNote = (note) => {
    if (note.title === '') {
      return this.setState({ error: true });
    }
    note._id = uuid();
    note.createdOn = new Date();
    note.editing = false;
    note.completed = false;
    
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note._id !== noteToRemove._id),
      };
    });
  }

  handleUpdateNote = (noteToUpdate) => {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => (note._id === noteToUpdate._id ? noteToUpdate : note)),
      };
    });
  }

  handleNoteList = () => {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note._id}>
                <NoteItem
                note={note}
                handleRemoveNote={this.handleRemoveNote}
                handleUpdateNote={this.handleUpdateNote}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="dashboard">
        <CreateNoteForm handleComplete={ this.handleAddNote } />
        {
           renderIf(this.state.error, <h2 className="error">You must enter a note.</h2>)
        }
       <h3 className="my-notes">My Notes:</h3>
       { this.handleNoteList() }
     </section>
    );
  }
}
