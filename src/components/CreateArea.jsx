import React from "react";
import Note from "./Note";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {


  const[note,setNote]=React.useState({title:"",
    content:" "});
  const[isExpanded,setExpand]=React.useState(false);

  function addNote(event){
    const {name,value}=event.target;
    setNote(prevNote=>{
       return{ ...prevNote,
         [name]:value
       }
      }
    );
  }
  function expand(){
    setExpand(true);
  }
  
  function submittNote(event){
     props.onAdd(note);
     setNote({title:"",
    content:" "})
     event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
      {isExpanded?<input name="title" placeholder="Title"  onChange={addNote} value={note.title}/>:null}
      <textarea name="content" placeholder="Take a note..." onClick={expand}  rows={isExpanded?"3":"1"} onChange={addNote} value={note.content} />
      {isExpanded?<Zoom in={isExpanded}><Fab onClick={submittNote}><AddIcon /></Fab></Zoom>:null}
      </form>
    </div>
  );
}

export default CreateArea;
