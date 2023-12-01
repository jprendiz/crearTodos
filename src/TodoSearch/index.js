import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch() {

  const {searchValue, setSearchValue} = useContext(TodoContext)
    return (

      <input 
        placeholder="Manejar la frustración" 
        className="TodoSearch" 
        value={searchValue}
        onChange={ e => setSearchValue(e.target.value) }
      />
    )
  }

  export { TodoSearch }