import TodoItem from "./TodoItem";

export const TodoList = ({ todos = [], onRemoveItem, onToggleTodo }) => {

  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem key={ todo.id } todo={ todo } onRemoveItem={ onRemoveItem } onToggleTodo={ onToggleTodo }/>
            ))
        }
    </ul>
  );

};

export default TodoList;