import { useContext } from "react"
import { TodoContext } from "../TodoContext"

function AgregarTodos() {
    const {setOpenModal} = useContext(TodoContext)

    return (
      <>
        <form onSubmit={setOpenModal(false)}>
          <p>Agrega un nuevo TODO</p>
          <input placeholder="Escribe el Todo aquí"/>
          <button type="button">Cancelar</button>
          <button type="submit">Aceptar</button>
        </form>
        <p>Agregar todos</p>
      </>
    )
}

export { AgregarTodos }
