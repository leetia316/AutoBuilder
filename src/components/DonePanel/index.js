import React, { Component } from "react";

import "./index.scss";

class DonePanel extends Component {
  constructor() {
    super();
  }
  render(props) {
    return (
        <div className="page-func">
        <input type="file" onChange={this.choose.bind(this)} />
        <button onClick={this.getLayData.bind(this)}>开始构建</button>
        {
          <a
            href={this.state.previewUrl}
            style={{
              display: this.state.previewUrl ? "inline-block" : "none"
            }}
            className="ml"
            target="_blank"
          >
            预览
          </a>
        }
        {
          <a
            href={this.state.downloadUrl}
            style={{
              display: this.state.downloadUrl ? "inline-block" : "none"
            }}
            className="ml"
            download={this.state.downloadUrl}
          >
            点击下载
          </a>
        }
        {/* <button onClick = {this.storageData.bind(this)}>保存当前配置数据</button> */}
      </div>
    );
  }
}
export default DonePanel;
