// app/components/left_nav/left_nav.jsx
//
import React, { Component } from "react";
import emitter from "../EventEmitter";

import "./index.scss";

const leftNavList = [
  {
    val: "添加点击框",
    type: "addBox"
  }
];

const addBox = () => {
  return () => {
    // 触发自定义事件按 写个函数节流 一秒 内执行一次，，
    emitter.emit("addbox");
  };
};

class FuncPanel extends Component {
  constructor() {
    super();
  }

  render(props) {
    return (
      <ul className="nav">
        {leftNavList.map((elm, idx) => (
          <li key={idx} data-type={elm.type} onClick={addBox()}>
            {elm.val}
          </li>
        ))}
      </ul>
    );
  }
}
export default FuncPanel;
