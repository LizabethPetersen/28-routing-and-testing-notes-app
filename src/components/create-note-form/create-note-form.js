import React from 'react';
import PropTypes from 'prop-types';
import './create-note-form.scss';

const defaultState = {
  title: '',
  content: '',
}; 

export default class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note ? props.note : defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update Note' : 'Remove Note';
    return (
      <form onSubmit={ this.handleSubmit } data-cy="note-form">
        <input 
          type="text"
          name="title"
          placeholder="Note"
          value={ this.state.title }
          onChange={ this.handleChange }
          data-cy="title"
        />
        <input
        type="text"
        name="content"
        placeholder="What's Needed?"
        value={ this.state.content }
        onChange={ this.handleChange }
        data-cy="content"
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

CreateNoteForm.propTypes = {
  handleComplete: PropTypes.func,
  note: PropTypes.object,
};
