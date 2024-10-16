"use client";
import  { useState } from "react";
// import React = require ("react")

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  // add od items
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    setInputValue(" ");
  };

  // addvalues  (id)number

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // deleted todo section

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-pink-700 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className=" text-3xl font-serif ">Todolist By Anum Saeed</h1>
          <p className="font-serif mt-3">
            {" "}
            Organize your work with our Next JS Todo List App
          </p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mxauto p-4 bg-slate-300 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow p-2 border border-gray-400 rounded-lg"
                placeholder="Add a new task ........"
              ></input>
              <button
                onClick={addTodo}
                className="ml-2 px-2 bg-pink-500 text-white rounded-lg hover:pink-600"
              >
                Add
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${
                  todo.completed ? "bg-lime-400 line-through" : "bd-sky-300"
                }`}
              >
                <span>{todo.text}</span>

                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="px-2 py-1 text-sm bg-orange-500 rounded-lg hover:nbg-gray-300"
                  >
                    {todo.completed ? "Undo" : "completed"}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-2 py-1 text-sm bg-yellow-500 rounded-lg hover:nbg-red-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Todolist;