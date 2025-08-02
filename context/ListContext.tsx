'use client';

import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Item = {
    id: string;
    text: string;
};

type ListsContextType = {
    todoList: Item[];
editItem: ( id: string, newText: string) => void;
    addItem: (text: string) => void;
    removeItem: (id: string) => void;
};
const ListsContext = createContext<ListsContextType | null>(null);
export const ListsProvider = ({ children }: { children: React.ReactNode }) => {
    const [todoList, setTodoList] = useState<Item[]>([]);


    const addItem = (text: string) => {
        const newItem = { id: uuidv4(), text };
        setTodoList(prev => [...prev, newItem]);

    };

    const removeItem = (id: string) => {
        setTodoList(prev => prev.filter(item => item.id !== id));

    };
    const editItem = ( id: string, newText: string) => {
  const updater = (items: Item[]) =>
    items.map(item => (item.id === id ? { ...item, text: newText } : item));

   setTodoList(prev => updater(prev));
  
};


    return (
        <ListsContext.Provider value={{ todoList, addItem, removeItem, editItem }}>
            {children}
        </ListsContext.Provider>
    );
};

export const useLists = () => {
    const context = useContext(ListsContext);
    if (!context) throw new Error('useLists باید در داخل ListsProvider استفاده شود.');
    return context;
};