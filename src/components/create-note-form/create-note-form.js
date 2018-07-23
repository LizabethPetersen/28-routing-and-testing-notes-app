import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  content: '',
}; 

export default class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNote(this.state);
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type="text"
          name="title"
          placeholder="Note"
          value={ this.state.title }
          onChange={ this.handleChange }
        />
        <input
        type="text"
        name="content"
        placeholder="What's Needed?"
        value={ this.state.content }
        onChange={ this.handleChange }
        />
        <button type="submit">Create Reminder</button>
      </form>
    );
  }
}

CreateNoteForm.propTypes = {
  handleAddNote: PropTypes.func,
};
