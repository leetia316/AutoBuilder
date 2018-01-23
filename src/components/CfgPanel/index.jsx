import React, { Component } from "react";
import { Menu, Icon } from "antd";
import "./index.scss";
import DonePanel from "../DonePanel";

const { SubMenu } = Menu;

class CfgPanel extends Component {
  constructor() {
    super();
  }

  render(props) {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>} />
        <SubMenu
          key="sub2"
          title={<span><Icon type="laptop" />subnav 2</span>}
        />
        <SubMenu
          key="sub3"
          title={<span><Icon type="notification" />subnav 3</span>}
        />
      </Menu>
    );
  }
}
export default CfgPanel;
