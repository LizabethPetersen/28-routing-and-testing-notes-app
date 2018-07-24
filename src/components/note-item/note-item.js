import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import CreateNoteForm from '../create-note-form/create-note-form';


export default class NoteItem extends React.Component {
  render() {  
    const { note, handleRemoveNote, handleUpdateNote } = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = (updatedNote) => {
      return handleUpdateNote({ ...updatedNote, editing: false });
    };
    return (
      <div className="note-item" data-cy="note-item">
        <strong>{note.title}</strong>: {note.content}
        <button
          onClick={ () => handleRemoveNote(note) } data-cy="note-item-btn">
          Delete
        </button>
        <button
          onClick={showModal}
          data-cy="note-item-btn">
        Update
        </button>
        <Modal
          show={note.editing}
          handleClose={hideModal}
        >
        <h3>Editing {note.title}</h3>
        <CreateNoteForm
          handleComplete={updateAndClose}
          note={note}
        />
        </Modal>
        </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
