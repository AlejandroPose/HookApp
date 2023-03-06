import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

    const { todos, allTodos, pendingTodos, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodo();

  return (
    <>
        <h1>TodoApp:</h1>
        <h2>Totales: {allTodos}</h2>
        <h3>Pendientes: {pendingTodos}</h3>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } onRemoveItem={ handleRemoveTodo } onToggleTodo={ handleToggleTodo }/>
            </div>
            <div className="col-5">
                <h4>ADD TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
        </div>
    </>
  );

};

export default TodoApp;