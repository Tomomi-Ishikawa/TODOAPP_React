import React from "react";

// styles
// CSS in JS
const style = {
  backgroundColor: "#c1fffc",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

// コンポーネント化したら, propsで　関数を引数として渡す
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}> 追加 </button>
    </div>
  );
};
