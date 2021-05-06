import React from 'react';
import NoteDisplay from '../NoteDisplay';



function MarkdownInput() {
  const [value, setValue] = React.useState('');
  const [note, setNote] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [search, setSearch] = React.useState('');  

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  function handleSave ()  {
    localStorage.setItem(title, value);
    setNote(localStorage.getItem(value));
  }

  function handleDelete() {
    localStorage.clear(title, value);
  }

  function handleRead(){
    var promp = prompt('Quelle note souhaitez-vous montrer ?')
    setSearch(localStorage.getItem(promp));
  }

  function handleEdit(){
    var promp = prompt('Quelle note souhaitez-vous modifier ?')
    var val = prompt('Que voulez vous y écrire ?')
    localStorage.setItem(promp, val);
  }

  var thisTitle = JSON.stringify(localStorage.getItem(title));
  var thisNote = JSON.parse(thisTitle);
  //console.log(thisNote);
  var keys = Object.keys(localStorage).map(a => a + ", ")
  var notes = Object.values(localStorage).map(a => a + ", ")
  console.log(keys);  

  return (
      <div>
      <button onClick={handleSave}>Save</button> <br/>        
      <br /><br />
      <>Votre titre : <NoteDisplay markdownValue={title} /></>
      <>Votre texte : <NoteDisplay markdownValue={value} /></>
      <textarea id="titleArea" rows="2" cols="100" value={title} onChange={onTitleChange}> 
      </textarea>

      <textarea id="textArea" rows="30" cols="100" value={value} onChange={onChange}> 
      </textarea>
      <button onClick={handleDelete}>Delete all notes</button>
      <button onClick={handleRead}>Read</button>        
      <button onClick={handleEdit}>Edit</button> <br/>        
      <p>{'Voici le contenu de la note désignée : ' + search}</p>
      <p>Veuillez trouve ci-dessous l'ensemble de vos articles, pour recherche :</p>
      <p>{keys}</p>
      <p>{notes}</p>
      </div>
  )
};

export default MarkdownInput;