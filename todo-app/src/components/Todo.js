import React, { useState } from "react";
import { Input } from "./Input";
import { Item } from "./Item";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [todoItem, setTodoItem] = useState(["Apple", "Banana", "Orange"]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleInput = (event) => {
    setInputData(event.target.value);
  };

  const addItem = () => {
    if (todoItem.includes(inputData)) {
      alert("The Item already exists");
    } else {
      setTodoItem([...todoItem, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (name) => {
    let newTodo = todoItem.filter((curElem) => {
      return curElem !== name;
    });
    setTodoItem(newTodo);
  };

  const setEditItem = (name, index) => {
    setInputData(name);
    setEditIndex(index);
    setIsEdit(true);
  };

  const editItem = () => {
    let newarr = todoItem.map((e) => {
      if (todoItem.indexOf(e) === editIndex) {
        return inputData;
      } else {
        return e;
      }
    });

    setTodoItem(newarr);
    setInputData("");
    setIsEdit(false);
  };

  return (
    <div className="container">
      <Input
        inputData={inputData}
        handleInput={handleInput}
        addItem={addItem}
        isEdit={isEdit}
        editItem={editItem}
      />
      <Item
        todoItem={todoItem}
        deleteItem={deleteItem}
        setEditItem={setEditItem}
      />
    </div>
  );
};
