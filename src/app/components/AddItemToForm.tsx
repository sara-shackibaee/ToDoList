
'use client';

import { useState } from 'react';
import { useLists } from '../../../context/ListContext';
const AddItemForm = () => {

    const { addItem } = useLists();
    const [text, setText] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addItem(text);
            setText('');
        }
    };

    return (<>
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2 ">
            <input
                className="border px-2 py-1 rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={'کار جدید...'}
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer">افزودن</button>
        </form>
    </>)
}
export default AddItemForm