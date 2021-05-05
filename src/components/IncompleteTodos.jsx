import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li>
              {/* map を使用してレンダリングする場合はkeyを指定すること */}
              <div key={todo} className="list-row">
                {todo}
                <button onClick={() => onClickComplete(index)}> 完了 </button>
                {/* 関数に引数を渡すときは、アロー関数化する */}
                <button onClick={() => onClickDelete(index)}> 削除 </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
