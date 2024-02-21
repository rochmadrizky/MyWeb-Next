"use client";

import { useState } from "react";
import Modal from "./Modal";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = (todo: string) => {
    setTodos([todo, ...todos]);
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setInputValue("");
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold">To-Do List</h1>
        <p>masih proses pengerjaan</p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4 px-8">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-300"
          >
            <span>{todo}</span>
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => handleRemoveTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddTodo={(todo) => {
          handleAddTodo(todo);
          handleCloseModal();
        }}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default TodoList;
