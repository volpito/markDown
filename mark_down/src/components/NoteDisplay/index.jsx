import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = () => {
  
  const converter = new Showdown.Converter();
  converter.makeHtml(markdownValue)

}


export default (NoteDisplay);