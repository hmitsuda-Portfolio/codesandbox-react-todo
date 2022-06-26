import React, {useState} from "react";
import { CompleteTodo } from "./components/CompleteTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { InputTodo } from "./components/InputTodo";
import './index.css';

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e) => setTodoText(e.target.value);
 
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

const onClickAdd = () => {
      if (todoText === "") return;
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }

    const onClickDelete = (index) => {
      const newTodos = [...incompleteTodos];
      newTodos.splice(index, 1)
      setIncompleteTodos(newTodos);
    }
const onClickComplete = (index) => {
  const newIncompleteTodos = [...incompleteTodos];
  newIncompleteTodos.splice(index, 1)

      const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
      setIncompleteTodos(newIncompleteTodos);
      setCompleteTodos(newCompleteTodos);
}

const onClickReturn = (index) => {
  const newCompleteTodos = [...completeTodos];
  newCompleteTodos.splice(index, 1)

  const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
  setIncompleteTodos(newIncompleteTodos);
  setCompleteTodos(newCompleteTodos);

}

  return (
    <>
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
    <IncompleteTodo todos={incompleteTodos} onClickDelete={onClickDelete} onClickComplete={onClickComplete}/>
    <CompleteTodo todos={completeTodos} onClickReturn={onClickReturn}/>
    </>
  )
}