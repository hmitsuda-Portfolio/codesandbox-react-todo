import React from 'react'

export const IncompleteTodo = (props) => {
    const {todos, onClickDelete, onClickComplete} = props；

  return (
    <div className="incomplete-area">
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li className="list-item" key={todo}>
              <p>{todo}</p>
            <div >
                <button onClick={() => onClickDelete(index)}>削除</button>
                <button onClick={() => onClickComplete(index)}>完了</button>
            </div>
            </li>
          );
        })}
      
      </ul>
    </div>
  )
}
