import './TodoForm.css'
import { TodoContext } from '../TodoContext';
import { useContext, useState } from 'react';

function TodoForm() {
    const { setOpenModal, addTodo } = useContext(TodoContext);
    const [newTodoValue, setNewTodoVAlue] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoVAlue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Agrega un nuevo TODO</label>
            <textarea
                placeholder="Escribe el Todo aquí"
                value={newTodoValue}
                onChange={onChange}
            />
          
            <div className="TodoForm-buttonContainer">

            </div>
            <button 
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
                >Cancelar </button>

            <button
                className="TodoForm-button TodoForm-button-add" 
                type="submit">Aceptar</button>

        </form>
    )
}

export { TodoForm }