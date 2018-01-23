import React, { Component } from "react";
import ReactDom from "react-dom";
import "./index.scss";

import { LocaleProvider, message, Layout, Menu, Icon } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import MainPanel from "./components/MainPanel";
import FuncPanel from "./components/FuncPanel";
import OptPanel from "./components/OptPanel";
import Head from "./components/Header";
import Foot from "./components/Footer";

const { Header, Content, Footer, Sider } = Layout;

// 全局名称显示头部信息
const UIConfig = {
  header: {
    content: "专题可视化构建工具"
  },
  footer: {
    content: 'Design ©2018 Created by xxx'
  }
};

// 左侧 导航栏 数据
const leftNavList = [
  {
    val: "添加点击框",
    type: "addBox"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgList: [],
      choosed: {}
    };
  }

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Layout>
          <Header>
            <Head>{UIConfig.header.content}</Head>
          </Header>
          <Layout>
            <Sider>
              <FuncPanel list={leftNavList} />
            </Sider>
            <Content>
              <MainPanel />
            </Content>
            <Sider>
              <OptPanel />
            </Sider>
          </Layout>
          <Footer>
            <Foot>{UIConfig.footer.content}</Foot>
          </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
