import React from 'react';
import NoteDisplay from '../NoteDisplay';
import { useState } from 'react';

function handleSave ()  {
  localStorage.setItem('blocNote');
}

function MarkdownInput() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    console.log(value);
    handleSave();
  }

  return (
      <div>
      <button onClick={handleClick}>Save</button>
      <br /><br />
      <>Votre texte : <NoteDisplay markdownValue={value} /></>
      <textarea id="textArea" rows="30" cols="100" value={value} onChange={onChange}> 
      </textarea>
      </div>
  )
};

export default MarkdownInput;