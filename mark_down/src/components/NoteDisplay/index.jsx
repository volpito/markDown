import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = (props) => {

  const converter = new Showdown.Converter();
  const content = converter.makeHtml(props.markdownValue);

  function createMarkup() {
    return {__html: content};
  }  
  
  return (
  <div dangerouslySetInnerHTML={createMarkup()} />    
  );
};

export default (NoteDisplay);