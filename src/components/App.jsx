import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, updateNote]=React.useState([]);
  function addNote(note){
     return updateNote(prev=>[...prev,note]);
  }
  function deleteNote(id){
    console.log("delete was trigered");
    updateNote(prevNotes=>prevNotes.filter((noteItem,index)=>
    {
      return index!==id;
    })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index)=>(<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />))}
      <Footer />
    </div>
  );
}

export default App;

// 