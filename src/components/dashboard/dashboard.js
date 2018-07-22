import uuid from 'uuid/v4';
import React from 'react';
import CreateNoteForm from '../create-note-form/create-note-form';
// import NoteList from '../note-list/note-list';
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

  handleNoteList = () => {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note._id}>
                {note.title} : {note.content}
              </li>

            );
          })
        }
      </ul>
    );
  }
  // handleRemoveNote = (note, deleteNote) => {
  // return Object.notes(note)
  // .filter(_id => _id !== deleteNote)
  // .reduce((result, current) => {
  // result[current] = note[current];
  // return result;
  // }, {});
  // }

  render() {
    return (
      <section className="dashboard">
        <CreateNoteForm handleAddNote={ this.handleAddNote } />
        {
           this.state.error && <h2 className="error">You must enter a note.</h2>
        }
       <h3>My Notes:</h3>
       { this.handleNoteList() }
     </section>
    );
  }
}
