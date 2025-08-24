import React, { useState, useEffect } from 'react';
import TodoList from './TodoList'
import { useSelector } from 'react-redux'

const Todo = () => {
  
    const tasks = useSelector(state => state.todos.tasks);
    const [progress, setProgress] = useState(0); // progress in %

    useEffect(() => {
        if (tasks.length === 0) {
            setProgress(0);
        } else {
            const completedTask = tasks.filter(t => t.completed).length;
            const progressWidth = (completedTask / tasks.length) * 100;
            setProgress(progressWidth);
        }
    }, [tasks]);
    
  return (
    <div className="max-w-2xl container mx-auto px-4 mt-14 md:mt-18 pb-10">
        <div className="px-5 md:px-8 py-7 md:py-10 border-3 border-[#48c9b0] rounded-4xl flex justify-between">
            <div className="flex flex-col gap-4 md:gap-5 flex-1">
                <h1 className='text-3xl text-white font-bold'>Todo App</h1>
                <p className='text-lg md:text-xl text-white font-bold'>Keep Up</p>
                <div className='bg-[#1a252f] h-2 md:h-3 w-full rounded-full relative overflow-hidden'>
                    <div className={` bg-[#48c9b0] rounded-full absolute left-0 top-0 h-full transition-all duration-300`}
                    style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="md:ml-8 bg-[#48c9b0] rounded-full text-xl md:text-2xl text-white font-bold size-20 md:size-24 flex justify-center items-center">
                {tasks.filter(t => t.completed).length} / {tasks.length}
            </div>
        </div>

        <TodoList/>
    </div>
  )
}

export default Todo