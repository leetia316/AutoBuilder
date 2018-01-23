// app/components/left_nav/left_nav.jsx
//
import React, { Component } from "react";
import emitter from "../EventEmitter";
import { Menu, Icon } from 'antd';

import "./index.css";

const { SubMenu } = Menu;

class FuncPanel extends Component {
  constructor() {
    super();
  }
  render(props) {
    const addBox = () => {
      return () => {
        // 触发自定义事件按 写个函数节流 一秒 内执行一次，，
        emitter.emit("addbox");
      };
    };
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
          <ul className="nav">
            {this.props.list.map((elm, idx) => (
              <li key={idx} data-type={elm.type} onClick={addBox()}>
                {elm.val}
              </li>
            ))}
          </ul>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default FuncPanel;
