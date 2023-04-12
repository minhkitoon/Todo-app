import React from 'react';

import Todo from './Todo';
// import { Container } from './styles';

export default function TodoList({ todoList , onCheckBtnClick, onDeleteBtnClick }) {
if(todoList)
  return (
    <>
    {
        todoList.map(todo => 
            <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} onDeleteBtnClick={onDeleteBtnClick}/>
        )
    }
    </>
  );
}
