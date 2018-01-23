import React, { Component } from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import "./index.scss";

import { LocaleProvider, message, Layout, Menu, Icon } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale-provider/zh_CN";

import Head from "./components/Header";
import Foot from "./components/Footer";
import MainPanel from "./components/MainPanel";
import InfoPanel from "./components/InfoPanel";
import FuncPanel from "./components/FuncPanel";
import CfgPanel from "./components/CfgPanel";
import DonePanel from "./components/DonePanel";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// 全局名称显示头部信息
const UIConfig = {
  header: {
    content: "专题可视化构建工具"
  },
  footer: {
    content: "Design ©2018 Created by xxx"
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageType: "", // 网页 类型 app ，pc
      pageTitle: "", // 网页 title
      pageKeyword: "", // 网页 keyword
      pageDescription: "", // 网页 description
      downloadUrl: "", // 下载地址
      previewUrl: "", // 发布地址
      imgList: [],
      choosed: {},
      imgSrc: [],
      choosedId: "",
      test: ""
    };

    this.setPageType = this.setPageType.bind(this);
    this.setPageTitle = this.setPageTitle.bind(this);
    this.setPageKeyword = this.setPageKeyword.bind(this);
    this.setPageDecription = this.setPageDecription.bind(this);
    this.choosedImg = this.choosedImg.bind(this);
  }

  // 选择 网页 类型 pc，app
  setPageType(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      pageType: value
    });
  }
  // 设置 生成网页 title
  setPageTitle(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      pageTitle: value
    });
  }
  // 设置 生成网页 keyword
  setPageKeyword(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      pageKeyword: value
    });
  }
  // 设置 生成网页 description
  setPageDecription(e) {
    const target = e.target;
    const value = target.value;
    this.setState({
      pageDescription: value
    });
  }

  choosedImg(e) {
    var id = e.target.id;
    var imgArr = this.state.imgSrc;
    imgArr.map((elm, idx) => {
      // 设置对应的 key 的值
      elm.isActive = elm.id == id ? true : false;
    });
    this.setChoosedImg(imgArr, id);
    e.stopPropagation();
  }
  setChoosedImg(arr, id) {
    this.setState({ imgSrc: arr });
    this.setState({ choosedId: id }); // 记录 选中 img的id
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
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  title={<span><Icon type="user" />专题信息</span>}
                >
                  <InfoPanel
                    {...this.state}
                    onSetPageType={this.setPageType}
                    onSetPageTitle={this.setPageTitle}
                    onSetPageKeyword={this.setPageKeyword}
                    onSetPageDecription={this.setPageDecription}
                  />
                </SubMenu>
                <hr />
                <FuncPanel />
              </Menu>
            </Sider>
            <Content>
              <MainPanel onClick={this.choosedImg} />
            </Content>
            <Sider>
              <CfgPanel />
              <hr />
              <DonePanel {...this.state} />
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
