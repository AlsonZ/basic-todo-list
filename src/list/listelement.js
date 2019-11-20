import React, {useState} from 'react';
import './style.css';

function ListElement(props) {

  const [editing, setEditing] = useState(false);
  const [strikethrough, setStrikethrough] = useState("");

  const deleteElement = () => {
    var array = [...props.elements]
    array.splice(props.index, 1);
    props.setElements(array);
  }
  const switchToInput = () => {
    if(editing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  }
  const addChanges = (event) => {
    var array = [...props.elements]
    array[props.index].text = event.target.value;
    props.setElements(array);
  }

  const changeCSS = () => {
    if(strikethrough === "textStrikethrough") {
      setStrikethrough("");
    } else {
      setStrikethrough("textStrikethrough");
    }
  }

  return (
    <div className="listElement">
      <span onClick={deleteElement} className="deleteElement">D</span>
      {!editing && <span onClick={changeCSS} className={"textElement" + " " +strikethrough}>{props.text}</span>}
      {editing && <input type="text" defaultValue={props.text} onChange={addChanges} className="editElementInput"/>}
      <span onClick={switchToInput} className="editElement">✎</span>
    </div>
  );
}

export default ListElement;
