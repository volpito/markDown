import React from 'react';
import { useState } from 'react';

function MarkdownInput({}) {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    console.log(value);
  }

  return (
      <div>
      <button onClick={handleClick}>Enregistrer votre texte</button>
      <p>Votre texte : {value}</p>
      <textarea id="textArea" rows="30" cols="100" value={value} onChange={onChange}> 
      </textarea>
      </div>
  )
};

export default MarkdownInput;