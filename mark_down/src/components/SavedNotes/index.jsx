import React from 'react';

const SavedNotes = (props) => {
  var title = JSON.stringify(props.thisTitle)
  var content = JSON.stringify(props.thisNote)

  return (
  <>
    <h1>{title}</h1>
    <p>{content}</p>
  </>    
  )
};

export default (SavedNotes);