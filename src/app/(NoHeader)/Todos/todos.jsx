"use client"
import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");

    const [todosList, updateTodos] = useState([]);

    useEffect(() => {
        if (localStorage) {
            const todos = JSON.parse(localStorage.getItem("todosList"))
            console.log("todos", todos);
            if (todos && todos.length > 0) {
                updateTodos(todos)
            }
        }
    }, [])

    useEffect(() => {
        if (localStorage && todosList.length > 0) {
            localStorage.setItem("todosList", JSON.stringify(todosList))
        }
    }, [todosList])

    function submitHandler(e) {
        e.preventDefault();

        updateTodos([...todosList, { task, desc }]);
        setTask("");
        setDesc("");

    };

    const deleteHandler = (i) => {
        let copyTask = [...todosList];
        copyTask.splice(i, 1)
        updateTodos(copyTask)
    }
    let render = null
    if (todosList.length > 0) {
        render = (<li>hii</li>)
    }

    return (

        <>
            <h1 className=' text-white font-bold px-3 py-3 flex justify-center size-300 text-5xl tracking-in-expand'>Todo List</h1>
            <form onSubmit={submitHandler}>
                <input className='text-2xl border-zinc-800 border-2 px-4 py-2 m-5 rounded' placeholder='Enter your Task here' type="text" value={task} onChange={(e) => {
                    setTask(e.target.value)
                }} required />
                <input className='text-2xl border-zinc-800 border-2 px-4 py-2 m-5 rounded' placeholder='Enter your Description here' type="text" value={desc} onChange={(e) => {
                    setDesc(e.target.value)
                }} required />
                <button className='rounded bg-green-800 text-white p-3 mx-1' >Add Task</button>
            </form>
            <div className='p-8 border-green-800 border-2 m-6 '>
                <ul className='text-red-200 font-bold'>
                    {todosList.length == 0 ? <p>No Todos items yet</p> : todosList?.map((elem, i) => {
                        return (<li key={i} className='flex items-center justify-between mb-8'>
                            <div className='flex justify-between mb-5 w-2/3'>
                                <h5 className='text-2xl font-semibold'>{elem.task}</h5>
                                <h6 className='text-xl font-semibold'>{elem.desc}</h6>
                            </div>
                            <button className='bg-red-500 text-white px-4 py-2 rounded font-bold' onClick={() => {
                                deleteHandler(i)
                            }}>Clear Task</button>
                        </li>)
                    })}
                    {render}
                </ul>
            </div>
        </>
    )
}

export default Todos