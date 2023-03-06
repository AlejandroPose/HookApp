import { useState } from "react";

export const TodoAdd = ({ onNewTodo }) => {

    const [formState, setFormState] = useState({
        description: '',
    });

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    };

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if (formState.description.length === 0) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description: formState.description,
            done: false,
        }
        onNewTodo && onNewTodo(newTodo);
        setFormState({
            description: '',
        });
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input onChange={onInputChange} name="description" value={formState.description} type="text" placeholder="What to do?" className="form-control"/>
        <button type="submit" className="btn btn-success mt-2">Add</button>
    </form>
  );
};

export default TodoAdd;