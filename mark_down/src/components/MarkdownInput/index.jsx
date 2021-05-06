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
    var promp = prompt('Quelle note souhaitez-vous modifier ? (tapez le titre ici)')
    var val = prompt('Que voulez vous y écrire ?')
    localStorage.setItem(promp, val);
  }

  var keys = Object.keys(localStorage).map(a => a)
  var notes = Object.values(localStorage).map(a => a)
  
  var result = keys.map(function(e, i) {
    return [e, notes[i]];
  });

  var thisTitle = JSON.stringify(result);
  var thisNote = JSON.parse(thisTitle);
  var final = thisNote.map(a => "- Titre : " + a[0] + ", Contenu : " + a[1] + " ")
  console.log(thisNote);  

  return (
      <div>
      <button onClick={handleSave}>Save</button> <br/>        
      <h2 style={{color: 'red'}}>Ci dessous : une préview de votre note :</h2>
      <h4 style={{color: 'red'}}><NoteDisplay markdownValue={title} /></h4>
      <><NoteDisplay markdownValue={value} /></>
      <textarea id="titleArea" rows="2" cols="100" value={title} onChange={onTitleChange}> 
      </textarea>
      <textarea id="textArea" rows="30" cols="100" value={value} onChange={onChange}> 
      </textarea>
      <button onClick={handleDelete}>Delete all notes</button>
      <button onClick={handleRead}>Read</button>        
      <button onClick={handleEdit}>Edit</button> <br/>        
      <p>{'Voici le contenu de la note désignée : ' + search}</p>
      <p>Veuillez trouve ci-dessous l'ensemble de vos articles, pour recherche :</p>
      <p>{final}</p>
      </div>
  )
};

export default MarkdownInput;