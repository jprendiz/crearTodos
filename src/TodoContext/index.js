import React, { useEffect, useState } from "react"

import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    // encapsulamos la lógica de la aplicación que 
    // querramos compartir entre varios niveles de 
    // todos nuestros componentes

    const { 
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);
    
      const totalTodos = todos.length;
      const completedTodos = todos.filter(todo => todo.completed === true).length
      
      console.log('Log 1');
      useEffect( () => {
          console.log('Log 2');
      }, [totalTodos])
      console.log('Log 3');
    
      const searchedTodos = todos.filter(
        (todo) => {
          return todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase())
        }
      );
    
      const completeTodos = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex( 
          todo => todo.text === text
        )
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex( 
           todo => todo.text === text
        )
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos)
      }
    return (
        <TodoContext.Provider value={{
            loading,
            error, 
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }