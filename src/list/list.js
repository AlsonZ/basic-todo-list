import React, { useState, useEffect } from 'react';
import ListElement from './listelement';
import './style.css';

function List() {

  const [elements, setElements] = useState([]);
  const [action, setAction] = useState("➕");
  const [box, setBox] = useState(true);

  useEffect(() => {
    checkSavedLists();
  }, []);

  const checkSavedLists = () => {
    // check cookies or w/e to determine if there is a previous list
    // if so turn the + into a - and also put into the state the list
    setElements([...elements, 
      {text:"testing text"}, 
      {text:"text that is sorta long enough so it just fits"},
      {text:"text that is super super long so that i can see how the span handles the super long sentences"},
    ]);
  }
  
  const openBox = () => {
    if(action == "➕") {
      setAction("—");// "‒ is diff symbol" "— is also different"
      setBox(false);
    } else {
      setAction("➕");
      setBox(true);
    }
  }

  const addElement = (event) => {
    if(event.key === "Enter") {
      // add new element
      setElements([...elements, {text:event.target.value}]);
      // remove value in input
      event.target.value = '';
    }
  }

  return (
    <div className="container">
      <h1>Todo-list<i onClick={openBox} className="addElementIcon">{action}</i></h1>
      {/* change box to css so it keeps the text there if u - it */}
      {box && <input type="text" placeholder="Add a new Todo" className="addElementInput" onKeyPress={addElement}/>}
      {elements.map((object, index) => {
        // convert this to context later
        return (<ListElement key={index} index={index} setElements={setElements} elements={elements} text={object.text}></ListElement>);
      })}
    </div>
  );
}

export default List;