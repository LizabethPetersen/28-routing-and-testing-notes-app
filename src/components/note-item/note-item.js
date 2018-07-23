import React from 'react';
import './note-item.scss';
 
export default class NoteItem extends React.Component {
  render() {  
    return (
    <div className="note-item">
          <h2>{ this.note.props.title }</h2>
            <p>{ this.note.props.content }</p> 
        </div> 
    );
  }
}
