import React, { useState } from "react";
import "./styles.css";

// jsx　の場合はclass = "" ではなく、
// className = "" となる
export const App = () => {
  //入力値設定 初期値なし
  const [todoText, setTodoText] = useState("");
  // 未完了リスト初期値
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  //完了リスト初期値
  const [completeTodos, setCompleteTodos] = useState([]);

  // React で 　インプットの値を受け取る場合は　Stateのとして受け取る場合の記述
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加アクション
  const onClickAdd = () => {
    //空文字の時は処理をリターンする
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //　削除アクション
  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //削除 .splice(index, 削除するn数) index要素から n 要素を削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了アクション
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    //削除 .splice(index, 削除するn数) index要素から n 要素を削除する
    newIncompleteTodos.splice(index, 1);
    // 完了項目に追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // state 更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //　戻すアクション
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    // 未完了に追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // state 更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div class="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}> 追加 </button>
      </div>
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
                  <button onClick={() => onclickDelete(index)}> 削除 </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  {todo}
                  <button onClick={() => onClickBack(index)}> 戻す </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
