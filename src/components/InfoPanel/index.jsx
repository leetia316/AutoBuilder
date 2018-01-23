import React, { Component } from "react";

import "./index.scss";

class InfoPanel extends Component {
  constructor() {
    super();
  }

  render(props) {
    return (
      <div className="page-config">
        {/*专题页 类型 pc  app  */}
        <div className="pageType">
          <span className="txt">专题类型：</span>
          <label htmlFor="">
            <input
              type="radio"
              name="pageName"
              onClick={this.onSetPageType}
              value="pc"
            />
            <span>PC端</span>
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="pageName"
              onClick={this.onSetPageType}
              value="app"
            />
            <span>APP端</span>
          </label>
        </div>
        {/* 网页 配置，名称，关键字，描述 */}
        <div className="htmlTitle">
          <label htmlFor="">
            <span className="txt">网页标题：</span>
            <input
              type="text"
              onChange={this.onSetPageTitle}
              placeholder="请输入网页 名称"
            />
          </label>
          <label htmlFor="">
            <span className="txt">网页关键字：</span>
            <input
              type="text"
              onChange={this.onSetPageKeyword}
              placeholder="请输入网页 关键字"
            />
          </label>
          <label htmlFor="">
            <span className="txt">网页描述：</span>
            <input
              type="text"
              onChange={this.onSetPageDecription}
              placeholder="请输入网页 描述"
            />
          </label>
        </div>
      </div>
    );
  }
}
export default InfoPanel;
