import React, { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);
  
  const submitHandler = (e) => {
    // console.log(e.target);
    e.preventDefault();
    console.log(title, desc);
    setTasks([...tasks, {title, desc}]);
    console.log(tasks);
    setTitle("");
    setDesc("");
  }

  const deleteHandler = (id) => {
    let copy = [...tasks];
    copy.splice(id,1);
    setTasks(copy);
  }

  const noTasks = <h2 className="p-6">No Tasks</h2>;

  let allTasks = tasks.map((iterator, index)=>{
    return(
      <li key={index} className="flex items-center justify-between">
      <div className="flex items-center justify-between my-5 w-2/3">
        <h5 className="text-2xl font-semibold">{iterator.title}</h5>
        <h6 className="text-xl font-semibold">{iterator.desc}</h6>
      </div>
      <button onClick={()=>deleteHandler(index)} className="border-2 border-black bg-red-400 px-10 py-1.5 inline ml-10 rounded">DELETE</button>
      </li>
    );
  });

  return (
    // Fragment
    <>
      <section className="text-cyan-50 bg-slate-500">
        <h1 className="text-5xl text-center font-bold p-5 ">TO-DO LIST</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="title" className="text-3xl pr-5">Title:</label>
            <input className="my-5 w-80 h-9 p-5 border-2 border-zinc-900 text-black" 
            type="text" 
            id="title" 
            placeholder="Enter Task" 
            value={title}
            onChange={(e)=> {
              // console.log(e.target.value);
              setTitle(e.target.value)
            }}
            />
            <label htmlFor="desc" className="text-3xl pr-5 ml-10">Description:</label>
            <input className="my-5 w-80 h-9 p-5 border-2 border-zinc-900 text-black" 
            type="text" 
            id="desc" 
            placeholder="Enter Task Description" 
            value={desc}
            onChange={(e)=> {
              // console.log(e.target.value);
              setDesc(e.target.value)
            }}
            />
          <button className="border-2 border-black bg-slate-400 px-10 py-1.5 inline ml-10 rounded">ADD</button>
        </form>
        
        <h1 className="px-5 text-2xl">Your Tasks:</h1>
        <div className="px-12">
          <ul>
            {tasks.length > 0 ? allTasks : noTasks}
          </ul>
        </div>
      </section>
    </>
  )
}