import React from "react";
import "./styles.css";

// jsx　の場合はclass = "" ではなく、
// className = "" となる
export const App = () => {
  return (
    <>
      <div class="input-area">
        <input placeholder="TODOを入力" />
        <button> 追加 </button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              あああああ
              <button> 完了 </button>
              <button> 削除 </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <li>
            <div className="list-row">
              いいいいい
              <button> 戻す </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
