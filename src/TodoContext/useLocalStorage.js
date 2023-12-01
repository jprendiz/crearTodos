import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let parsedItem;
  
  useEffect( () => {

    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);

        if ( !localStorageItem ) {
          localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
    }, [])
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    }
   
    return ({
      item, 
      saveItem, 
      loading,  
      error})
  }

  export { useLocalStorage }

  // const defaultTodos = [
//   { 
//     text: 'Manejar la frustración 1',
//     completed: false
//   },
//   { 
//     text: 'Manejar la frustración 2 ',
//     completed: false
//   },
//   { 
//     text: 'Manejar la frustración 3',
//     completed: true
//   },
//   { 
//     text: 'Manejar la frustración 4',
//     completed: false
//   },
//   { 
//     text: 'Manejar la frustración 5',
//     completed: true
//   },
// ]

// const stringifiedTodos = JSON.stringify(defaultTodos);

// localStorage.setItem('TODOS_V1', stringifiedTodos )