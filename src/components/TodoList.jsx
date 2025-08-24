import React, { useState } from 'react'
import { FaPlus,FaRegEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import {useSelector,useDispatch} from 'react-redux'
import { addTask,deleteTask,editTask,clearTask,toggleTask } from '../features/todo/todoSlice';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

const TodoList = () => {
    const tasks = useSelector(state=> state.todos.tasks);
    const dispatch = useDispatch();
    const [input,setInput] = useState('');
    const [editId,setEditId] = useState(null);

    const handleInput = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        if (editId) {
            dispatch(editTask({ id: editId, newText: input.trim() }));
            setEditId(null);
        } else {
            dispatch(addTask(input.trim()));
        }

        setInput('');
    };


    const handleEdit = (task)=>{
        setEditId(task.id);
        setInput(task.task);
    }

  return (
    <div>
        <form onSubmit={handleInput} className='mt-10 md:mt-12 mb-8 flex justify-center items-center gap-4 md:gap-5'>
            <input 
            type="text" 
            value={input}
            onChange={(e)=>{
                setInput(e.target.value);
                if (e.target.value === '') setEditId(null);
            }}
            placeholder='Write your task' 
            className='px-4 py-2.5 md:py-3.5 border-2 border-[#48c9b0] w-full rounded-xl text-white focus:outline-0 bg-[#1a252f]' 
            />

           <button type='submit' title='Add task' className='bg-[#48c9b0] cursor-pointer rounded-full p-2.5 md:p-3.5 flex justify-center items-center text-white text-lg md:text-xl'><FaPlus /></button>

           <button  
           title='Delete all tasks' 
           onClick={()=>dispatch(clearTask())}
           className='bg-[#48c9b0] cursor-pointer rounded-full p-2.5 md:p-3.5 flex justify-center items-center text-white text-lg md:text-xl'>
            <ImBin />
           </button>
        </form>

        <ul className='space-y-5'>
            <AnimatePresence>
                {tasks.map(task => (
                <motion.li
                    key={task.id}
                    initial={{ x: -200, opacity: 0 }}   
                    animate={{ x: 0, opacity: 1 }}      
                    exit={{ x: 200, opacity: 0 }}       
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`relative ${task.completed || editId === task.id ? 'border-transparent' : 'border-[#48c9b0]'} 
                    flex items-center justify-between px-4 py-3 md:text-xl border-2 text-white bg-[#1a252f] w-full rounded-xl`}
                >
                    <div className='flex items-center gap-3.5'>
                    <div className='flex justify-center items-center'>
                        <input
                        type="checkbox"
                        onChange={() => dispatch(toggleTask(task.id))}
                        className={`${editId === task.id ? 'pointer-events-none opacity-50' : 'pointer-events-auto opacity-100'} 
                        w-5 h-5 cursor-pointer relative border-2 border-[#48c9b0] rounded-full bg-transparent
                        appearance-none checked:bg-[#48c9b0] checked:border-[#48c9b0'] checked:before:content-['✔']
                        checked:before:absolute checked:before:inset-0 checked:before:flex checked:before:items-center checked:before:justify-center 
                        checked:before:text-white checked:before:text-xs`}
                    />
                    </div>
                    <p className={`${task.completed ? 'line-through text-[#48c9b0]' : ''} break-words`}>{task.task}</p>
                    </div>
                    <div className="flex items-center gap-4 text-[#48c9b0] pl-2.5 md:pl-5">
                    <button
                        onClick={() => handleEdit(task)}
                        className={`${task.completed ? 'pointer-events-none opacity-50' : 'pointer-events-auto opacity-100'} cursor-pointer text-xl md:text-2xl`}
                    ><FaRegEdit /></button>
                    <button
                        onClick={() => dispatch(deleteTask(task.id))}
                        className='cursor-pointer text-xl md:text-2xl'
                    ><ImBin /></button>
                    </div>
                </motion.li>
                ))}
            </AnimatePresence>
        </ul>



    </div>
  )
}

export default TodoList