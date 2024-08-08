import React, { useRef, useState } from 'react'
import deleteicon from '../assets/delete.png'

const Tasks = ({ text, id, isComplete, deleteText }) => {
    const [taskText, setTaskText] = useState(text);
    const [editText, setEditText] = useState(0);
    const textRef = useRef(text);
    const handleEdit = () => {
        setEditText(1);

        return;
    }
    const handleSave = () => {
        if (!editText)
            return;
        setTaskText(textRef.current.value);
        setEditText(0);
        return;
    }

    return (
        <div className='relative z-10 p-4  md:p-4 mx-auto mt-3 w-[90%] md:w-[35%] h-auto rounded-xl bg-yellow-400 items-center '>
            <div className='flex justify-between items-center '>
                {editText ? <input type='text' className='w-7/12' placeholder='Enter new text' ref={textRef} /> : <h1 className=' font-neucha'
                >{taskText}</h1>}
                <ul className='flex  '>
                    <li className='mx-2 cursor-pointer'
                        onClick={handleEdit}>✏️</li>
                    <li className='mx-2 cursor-pointer'
                        onClick={handleSave}>✔️</li>
                    <li className='mx-2'> <img className='w-7 cursor-pointer' src={deleteicon} alt='del'
                        onClick={() => {

                            return (
                                deleteText(id)
                            )
                        }}
                    /></li>

                </ul>
            </div>
        </div>
    )
}

export default Tasks

//
///