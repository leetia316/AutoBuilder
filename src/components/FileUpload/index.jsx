// use to build a header
import React, { Component } from "react";
import "./index.scss";

class FileUpload extends Component {
  constructor() {
    super();
    this.choose = this.choose.bind(this);
  }

  // 测试===============================================
  choose(e) {
    //console.log(e.target.value)
    var fileReader = new FileReader();
    var file = e.target.files[0];
    fileReader.readAsDataURL(file);
    var arr = this.state.imgSrc;
    //console.log(file);
    fileReader.onloadend = onEv => {
      var src = onEv.target.result; //base64
      var img = new Image();
      img.src = src;
      img.onload = function() {
        //console.log(img.width,img.height);
      };
      var obj = {
        id: new Date().getTime(),
        src: src,
        isActive: false
      };
      // 获取图片的宽和高，w，h 不是真实的，是相对的，要获取百分比
      arr.push(obj);
      this.setState({ imgSrc: arr });
    };
  }

  render(props) {
    return <input type="file" onChange={this.choose} />;
  }
}

export default FileUpload;
