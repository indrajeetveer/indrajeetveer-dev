import { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("")       // holds what's typed in input
    const [todos, setTodos] = useState([])     // holds the list of tasks

    let handleAdd = () => {
        if(task.trim() === "") return          // ignore empty input
        setTodos(prev => [...prev, task])       // add new task to array
        setTask("")                             // clear input after adding
    }

    return (
        <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl'>
            <h1 className='text-2xl font-bold text-center mb-6 text-gray-800'>To-Do List</h1>

            <div className='flex gap-2 mb-6'>
                <input 
                    type="text" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                    placeholder="Enter a task"
                    className='flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-sky-400'
                />
                <button 
                    onClick={handleAdd}
                    className='bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg transition'
                >
                    Add
                </button>
            </div>

            <ul className='space-y-2'>
                {todos.map((item, index) => (
                    <li 
                        key={index} 
                        className='bg-gray-100 px-4 py-2 rounded-lg text-gray-700 shadow-sm'
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo