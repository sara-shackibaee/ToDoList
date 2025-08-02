'use client';

import { useLists } from '../../../context/ListContext';
import { useState } from 'react';


export const List = () => {
  const { todoList,  removeItem, editItem } = useLists();
 

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  const startEditing = (id: string, currentText: string) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const handleEditSubmit = (id: string) => {
    if (editingText.trim()) {
      editItem( id, editingText.trim());
      setEditingId(null);
      setEditingText('');
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">
لیست کارها
      </h2>
      <ul className="space-y-1">
        {todoList.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-gray-100 px-3 py-1 rounded">
            {editingId === item.id ? (
              <div className="flex w-full gap-2">
                <input
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="border rounded px-2 py-1 flex-1"
                  autoFocus
                />
                <button
                  onClick={() => handleEditSubmit(item.id)}
                  className="text-green-600"
                >
                  ذخیره
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-500"
                >
                  لغو
                </button>
              </div>
            ) : (
              <>
                <span>{item.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEditing(item.id, item.text)}
                    className="text-blue-600"
                  >
                    ویرایش
                  </button>
                  <button
                    onClick={() => removeItem( item.id)}
                    className="text-red-600"
                  >
                    حذف
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
