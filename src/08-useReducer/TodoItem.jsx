export const TodoItem = ({ todo, onRemoveItem, onToggleTodo }) => {

  return (
    <li className="list-group-item d-flex justify-content-between">
        <span onDoubleClick={ () => onToggleTodo(todo) } className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}>{todo.description}</span>
        <button onClick={ () => onRemoveItem(todo) } className="btn btn-danger">Borrar</button>
    </li>
  );

};

export default TodoItem;