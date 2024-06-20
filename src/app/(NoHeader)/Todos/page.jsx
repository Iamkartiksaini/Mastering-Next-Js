"use client";

import CustomDynamicDialog from '@/components/Dialog/newDialog';
import './styles.css'
import { useEffect, useState } from 'react';
import { formatRelativeTime } from '@/utils/time';

const TodosPage = () => {

  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const [sections, updateSections] = useState({
    newTodo: [],
    progressing: [],
    deletingQue: [],
  });

  useEffect(() => {
    try {
      if (localStorage) {
        const todos = JSON.parse(localStorage.getItem("todosList"))
        if (!todos) return
        if (todos) {
          if (todos["newTodo"].length > 0 || todos["progressing"].length > 0 || todos["deletingQue"].length > 0) {
            console.log("todos", todos);
            updateSections(todos)
          }
          return
        }
      }
    } catch (error) {
      console.log("error ===>", error.message);
    }

  }, [])


  useEffect(() => {
    if (localStorage && sections["newTodo"].length > 0 || sections["progressing"].length > 0 || sections["deletingQue"].length > 0) {
      localStorage.setItem("todosList", JSON.stringify(sections))
    }
    // else {

    //   // localStorage.setItem("todosList", JSON.stringify({
    //   //   newTodo: [{
    //   //     "title": "Walking ",
    //   //     "description": "to moon"
    //   //   },
    //   //   {
    //   //     "title": "random",
    //   //     "description": "des"
    //   //   }],
    //   //   progressing: [{
    //   //     "title": "Running ",
    //   //     "description": "25 KM"
    //   //   }],
    //   //   deletingQue: [],
    //   // }))
    // }
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


    const y = Date.now()
    const x = new Date(y)
    updateSections(pre => {
      const copy = { ...pre }
      copy["newTodo"] = [{ ...newTodo, time: x }, ...copy["newTodo"]]
      return copy
    }
    )
    setNewTodo({ title: "", description: "" })
    const checkbox = document.getElementsByName("menu" + "form")
    checkbox[0].checked = false

  }

  const deleteHandler = (i, section) => {
    const copySections = { ...sections };
    const updatedSection = copySections[section];

    if (updatedSection && updatedSection.length > i) {
      updatedSection.splice(i, 1);
      localStorage.setItem("todosList", JSON.stringify({ ...copySections }))
      updateSections({ ...copySections });
    } else {
      console.error(`Invalid section (${section}) or index (${i})`);
    }
  };

  const handleDrop = (e, to) => {
    e.preventDefault();
    const itemType = e.dataTransfer.getData('text/plain');
    if (itemType === "TodoItem") {
      const droppedData = e.dataTransfer.getData('application/type');
      const itemData = JSON.parse(droppedData);
      const { from, itemIndex } = itemData;
      if (to == from) return console.log("item is already in this section");
      const transferThisValue = sections[from][itemIndex]
      const removeItem = sections[from].filter((val, i) => i !== itemIndex);
      updateSections((prevState) => ({
        ...prevState,
        [from]: removeItem,
        [to]: [transferThisValue, ...prevState[to]]
      }));
    }
  };
  const handleDragStart = (e, type, sourceSectionName, itemIndex) => {
    e.dataTransfer.setData('text/plain', type);
    if (type === "TodoItem") {
      const updatedData = { itemIndex, from: sourceSectionName };
      const serializedData = JSON.stringify(updatedData);
      e.dataTransfer.setData('application/type', serializedData);
    }
    else if (type === "section") {
      return
      console.log("section drag");
    }
  };


  function reOrderArray({ obj, from, draggingItemIndex, dropOverIndex }) {
    const shiftData = obj[from][draggingItemIndex];
    obj[from].splice(draggingItemIndex, 1);
    obj[from].splice(dropOverIndex, 0, shiftData);
    reMapping(from);
  }

  function mouseOverHandler(event, overThisItem) {
    event.preventDefault();
    const draggingOverItemIndex = overThisItem;
  }


  const handleDragOver = (e) => {
    e.preventDefault();
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
          <h1>New Todos / Edit </h1>
          <ul onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "newTodo")}>
            {sections["newTodo"].length == 0 ? <p>No Todos items yet</p> : sections["newTodo"]?.map((todo, i) => {
              return (<li className='content-box' onDragStart={(e) => handleDragStart(e, "TodoItem", "newTodo", i)} draggable key={i} >
                <h5>{todo?.title}</h5>
                <p>{todo?.description}</p>
                <p className='time'>{formatRelativeTime(todo.time)}</p>
                <button className='edit'>Edit</button>
              </li>)
            })}
          </ul>
        </section>
        <section className='process'>
          <h1>Process</h1>
          <ul onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "progressing")} >
            {sections["progressing"].length == 0 ? <p>No Todos items yet</p> : sections["progressing"]?.map((todo, i) => {
              return (<li className='content-box' draggable onDragStart={(e) => handleDragStart(e, "TodoItem", "progressing", i)} key={i} >
                <h5>{todo?.title}</h5>
                <h6>{todo?.description}</h6>
                <p className='time'>{formatRelativeTime(todo.time)}</p>
              </li>)
            })}
          </ul>
        </section>
        <section className='deleteQue'>
          <h1>Auto Delete Que </h1>
          <ul onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, "deletingQue")}>
            {sections["deletingQue"].length == 0 ? <p>No Todos items yet</p> : sections["deletingQue"]?.map((todo, i) => {
              return (<li className='content-box' draggable onDragStart={(e) => handleDragStart(e, "TodoItem", "deletingQue", i)} key={i} >
                <div>
                  <h5>{todo?.title}</h5>
                  <h6>{todo?.description}</h6>
                  <p className='time'>{formatRelativeTime(todo.time)}</p>
                </div>
                <button className='del' onClick={() => {
                  deleteHandler(i, "deletingQue")
                  // const key = document.getElementById("menu" + "deletingQue-" + i)
                  // key.click()
                }}>Delete Immedatly</button>
              </li>)
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};


export default TodosPage;
