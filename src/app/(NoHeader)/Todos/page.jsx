"use client";

import CustomDynamicDialog from '@/components/Dialog/newDialog';
import './styles.css'
import { useEffect, useState } from 'react';

const TodosPage = () => {

  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [sections, updateSections] = useState({
    newTodo: [],
    progressing: [],
    deletingQue: [],
  });


  useEffect(() => {
    if (localStorage) {
      const todos = JSON.parse(localStorage.getItem("todosList"))
      console.log("todos", todos);
      if (todos && todos["newTodo"].length > 0 || todos["progressing"].length > 0 || todos["deletingQue"].length > 0) {
        updateSections(todos)
      }
    }
  }, [])

  useEffect(() => {
    if (localStorage && sections["newTodo"].length > 0 || sections["progressing"].length > 0 || sections["deletingQue"].length > 0) {
      localStorage.setItem("todosList", JSON.stringify(sections))
    }
  }, [sections])

  const inputChangeHandler = (key, value) => {
    setNewTodo(pre => {
      const newData = { ...pre }
      newData[key] = value
      return newData
    })
  }

  function submitHandler(e) {
    e.preventDefault()
    updateSections(pre => {
      const copy = { ...pre }
      copy["newTodo"] = [newTodo, ...copy["newTodo"]]
      return copy
    }
    )
  }

  const deleteHandler = (i, section) => {
    let copyTask = { ...sections };
    copyTask[section].splice(i, 1)
    updateSections(copyTask)
  }


  const handleDrop = (e, tab) => {
    e.preventDefault();

    const data1 = e.dataTransfer.getData("text/plain");
    const data2 = e.dataTransfer.getData("application/json");
    const parseData = JSON.parse(data2);
    const droppingTo = tab;

    const { index, sectionId } = parseData;

    if (sectionId === droppingTo) {
      reOrderArray({
        obj: sectionsArray,
        from: sectionId,
        draggingItemIndex: index,
        dropOverIndex: draggingOverItemIndex,
      });
    } else {
      updateArrays({
        obj: sectionsArray,
        from: sectionId,
        to: droppingTo,
        itemIndex: index,
      });
    }
  };

  function dragStart(event, index, sectionId) {
    try {
      event.dataTransfer.setData("text/plain", "from " + sectionId);
      event.dataTransfer.setData(
        "application/json",
        JSON.stringify({ index, sectionId })
      );
    } catch (error) {
      console.error("Error setting drag data:", error);
    }
  }

  function reOrderArray({ obj, from, draggingItemIndex, dropOverIndex }) {
    const shiftData = obj[from][draggingItemIndex];
    obj[from].splice(draggingItemIndex, 1);
    obj[from].splice(dropOverIndex, 0, shiftData);
    reMapping(from);
  }

  function mouseOverHandler(event, overThisItem) {
    event.preventDefault();
    draggingOverItemIndex = overThisItem;
  }

  function updateArrays({ obj, from, to, itemIndex }) {
    const data = obj[from][itemIndex];
    obj[from].splice(itemIndex, 1);
    obj[to].push(data);
    reMapping(to);
    reMapping(from);
  }


  const trigger = (title) => <div className='content-box'>{title}</div>

  return (
    <div className='Todos'>
      <div className="header">
        <h2>Create Todos</h2>
        <CustomDynamicDialog unqiueKey={"form"} label='Add Todo' posX={"center"} >
          <form className='form' onSubmit={submitHandler}>
            <input className='title' placeholder='Enter your Task here' type="text" value={newTodo.title} onChange={(e) => {
              inputChangeHandler("title", e.target.value)
            }} required />
            <input className='description' placeholder='Enter your Description here' type="text" value={newTodo.description} onChange={(e) => {
              inputChangeHandler("description", e.target.value)
            }} required />
            <button className="submit">Add Task</button>
          </form>
        </CustomDynamicDialog>
      </div>
      <div className="dragAndDrop">
        <section className='newTodosList'>
          <h1>New Todos </h1>
          <ul onDragOver={() => dragStart(event, 1, '${newTodo}')}>
            {sections["newTodo"].length == 0 ? <p>No Todos items yet</p> : sections["newTodo"]?.map((todo, i) => {
              return (<li className='content-box' draggable key={i} >
                <h5>{todo.title}</h5>
                <p>{todo.description}</p>
              </li>)
            })}
          </ul>
        </section>
        <section className='process'>
          <h1>Process</h1>
          <ul>
            {sections["progressing"].length == 0 ? <p>No Todos items yet</p> : sections["progressing"]?.map((todo, i) => {
              return (<li key={i} >
                <CustomDynamicDialog TiggerComponent={() => trigger(todo.title)} modelWidth={"50vw"} unqiueKey={"processItem-" + i} label={todo.title}>
                  <h5>{todo.title}</h5>
                  <h6>{todo.description}</h6>
                </CustomDynamicDialog>
              </li>)
            })}
          </ul>
        </section>
        <section className='deleteQue'>
          <h1>Auto Delete Que </h1>
          <ul>
            {sections["deletingQue"].length == 0 ? <p>No Todos items yet</p> : sections["deletingQue"]?.map((todo, i) => {
              return (<li key={i} >
                <CustomDynamicDialog TiggerComponent={() => trigger(todo.title)} modelWidth={"50vw"} unqiueKey={"deleteItem-" + i} label={todo.title}>
                  <div>
                    <h5>{todo.title}</h5>
                    <h6>{todo.description}</h6>
                  </div>
                  <button onClick={() => {
                    deleteHandler(i, "deletingQue")
                    const key = document.getElementById("menu" + "deletingQue-" + i)
                    key.click()
                  }}>Delete Immedatly</button>
                </CustomDynamicDialog>
              </li>)
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};


export default TodosPage;
