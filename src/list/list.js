import React, { useState, useEffect } from 'react';
import './style.css';

function List() {

  const [elements, setElements] = useState([]);
  const [action, setAction] = useState("+");
  const [box, setBox] = useState(true);

  useEffect(() => {
    checkSavedLists();
  }, []);

  const checkSavedLists = () => {
    // check cookies or w/e to determine if there is a previous list
    // if so turn the + into a - and also put into the state the list
    setElements([...elements, {text:"testing text"}]);
  }
  
  const openBox = () => {
    if(action == "+") {
      setAction("-");
      setBox(false);
    } else {
      setAction("+");
      setBox(true);
    }
  }

  const addElement = (event) => {
    if(event.key === "Enter") {
      // add new element
      setElements([...elements, {text:event.target.value}]);
    }
  }

  return (
    <div className="container">
      <h1>Todo-list<i onClick={openBox} className="add-element">{action}</i></h1>
      {box && <input type="text" className="addElementBox" onKeyPress={addElement}/>}
      {/*list elements go here*/}
      {elements.map((object, index) => {
        return (
        // <p className="listElements">{object.text}</p>
        <div></div>
        );
      })}
    </div>
  );
}

export default List;
