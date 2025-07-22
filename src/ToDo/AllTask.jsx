const AllTask = ({ todos, setTodos }) => {

  const handleDelete = (e) => {
    const newTodo = todos.filter((todo,index)=>{
      if(index != e.target.value){
        return todo;
      }
    })
    setTodos(newTodo)
  }

  return (
    <>
      {
        todos.map((todo, index) => {
          return (
            <div key={todo.id} className="todo_container">
              <div>{todo.title}</div>
              <div>{todo.date}</div>
              <div>{todo.description}</div>
              {/* <button onClick={handleEdit}>Edit</button> */}
              <button onClick={handleDelete}>Delete</button>
            </div>
          )
        })
      }

    </>
  )
}

export default AllTask