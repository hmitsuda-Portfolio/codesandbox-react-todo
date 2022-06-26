import React from 'react'

export const InputTodo = (props) => {
    const {todoText, onChange, onClick} = props;
  return (
    <div className="input-area">
      <input  value={todoText} onChange={onChange} placeholder="ここに入力して下さい" type="text" />
      <button onClick={onClick}>追加</button>
      </div>
  )
}
