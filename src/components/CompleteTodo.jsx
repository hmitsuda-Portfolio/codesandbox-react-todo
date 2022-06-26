import React from 'react'

export const CompleteTodo = (props) => {
    const {todos, onClickReturn} = props;
  return (
    <div className="complete-area">
      <p>完了のTODO</p>
      <ul>
      {todos.map((todo, index) => {
          return (
            <li className="list-item" key={todo}>
              <p>{todo}</p>
            <div >
                <button onClick={() => onClickReturn(index)}>戻る</button>
            </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
};
