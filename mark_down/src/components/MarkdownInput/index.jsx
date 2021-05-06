import React from 'react';
import NoteDisplay from '../NoteDisplay';



function MarkdownInput() {
  const [value, setValue] = React.useState('');
  const [note, setNote] = React.useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  function handleSave ()  {
    localStorage.setItem('blocNote', value);
    setNote(localStorage.getItem('blocNote'));
    console.log(note);
  }

var thisNote = JSON.stringify(localStorage.getItem('blocNote'));

  return (
      <div>
      <>Votre data sauvegardée : {thisNote}</>
      <br /><br />
      <button onClick={handleSave}>Save</button>
      <br /><br />
      <>Votre texte : <NoteDisplay markdownValue={value} /></>
      <textarea id="textArea" rows="30" cols="100" value={value} onChange={onChange}> 
      </textarea>
      </div>
  )
};

export default MarkdownInput;