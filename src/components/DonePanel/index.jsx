import React, { Component } from "react";
import reqwest from "reqwest";
import "./index.scss";

class DonePanel extends Component {
  constructor(props) {
    super();
    this.getLayData = this.getLayData.bind(this);
  }
  // // 点击下载  ===============
  // download(e) {
  //   const url = this.props.downloadurl;
  //   url &&
  //     $.ajax({
  //       type: "get",
  //       url: url,
  //       success: function(data) {
  //         console.log("下载文件成功");
  //       },
  //       error: function(err) {
  //         alert(err);
  //       }
  //     });
  // }

  // 得到布局 数据函数==============向后台发起  ajax 通信，数据，
  getLayData() {
    const data = this.state.imgSrc;
    // 根据 imgSrc 数据算取，点击区域的 left ,top,width,height,css 样式

    const totalArr = [];
    data.map((elm, idx) => {
      const parentWidth = elm.width || "";
      const parentHeight = elm.height || "";
      const index_idx = idx;
      const arr = [];
      // 轮询 点击区域
      elm.clkArr &&
        elm.clkArr.map((elmt, index) => {
          const width = `${(elmt.width / parentWidth * 100).toFixed(2)}%`;
          const height = `${(elmt.height / parentHeight * 100).toFixed(2)}%`;
          const left = `${(elmt.left / parentWidth * 100).toFixed(2)}%`;
          const top = `${(elmt.top / parentHeight * 100).toFixed(2)}%`;
          const url = `${elmt.url || ""}`;
          const dataTitle = `${elmt.dataTitle || ""}`;
          const dataType = `${elmt.dataType || ""}`;
          const obj = {
            width,
            height,
            left,
            top,
            dataTitle,
            dataType,
            url
          };
          arr.push(obj);
        });
      totalArr.push({
        // 图片索引，第几章图片
        index: index_idx + 1,
        // 没张图片的 点击区域 的样式 百分比 eg{left：'',top:'',width:'',height:''}
        data: (arr.length && arr) || "",
        // 图片的 base64编码
        base64Src: elm.src
      });
    });
    console.log(totalArr);
    // 发起ajax 请求，server。js来获取并相应
    const sendData = JSON.stringify(totalArr);

    // 得到 生成 网页 的 类型 pc app

    const isPc =
      (this.props.pageType == "pc" && 1) ||
      (this.props.pageType == "app" && 2) ||
      "";
    // 闭包
    const _this = this;

    const BasePath = `${window.location.protocol}//${window.location.host}`;
    // 发起请求 前验证数据 的有效性==============
    // 发起ajax 请求，server。js来获取并相应
    if (totalArr.length) {
      reqwest({
        url: `${BasePath}/getjson`,
        method: "post",
        type: "json",
        data: {
          data: sendData,
          isPc: isPc, // 是1--> pc 还是 2--->app
          title: this.props.pageTitle,
          keyword: this.props.pageKeyword,
          description: this.props.pageDescription
        },
        timeout: 30000
      }).then(
        result => {
          if (this.isMounted()) {
            console.log(result);
            if (result.result == 0 && result.data) {
              result.data.downloadUrl &&
                _this.setState({ downloadUrl: result.data.downloadUrl });
              result.data.previewUrl &&
                _this.setState({ previewUrl: result.data.previewUrl });
            }

            console.log("下载文件成功");
            this.setState({
              result_data: result.data
            });
          }
        },
        function(err, msg) {
          console.log(err);
          console.log(msg);
        }
      );
    } else {
      alert("请先选择图片");
    }

    //emitter.emit('buildfile');

    //   这里我要去调用一个 事件，emitter.emit('addbox')
  }

  componentDidMount() {
    const url = this.props.downloadurl;
    //异步请求
    url &&
      reqwest({
        url: url,
        method: "get",
        type: "json"
      }).then(
        result => {
          if (this.isMounted()) {
            console.log("下载文件成功");
            this.setState({
              result_data: result.data
            });
          }
        },
        function(err, msg) {
          console.log(err);
          console.log(msg);
        }
      );
  }

  render(props) {
    return (
      <div>
        <button onClick={this.getLayData}>开始构建</button>
        {
          <a
            href={this.props.previewUrl}
            style={{
              display: this.props.previewUrl ? "inline-block" : "none"
            }}
            className="ml"
            target="_blank"
          >
            预览
          </a>
        }
        {
          <a
            href={this.props.downloadUrl}
            style={{
              display: this.props.downloadUrl ? "inline-block" : "none"
            }}
            className="ml"
            download={this.props.downloadUrl}
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
