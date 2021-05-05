import React from "react";

// コンポーネント化したら, propsで　関数を引数として渡す
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div class="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}> 追加 </button>
    </div>
  );
};
