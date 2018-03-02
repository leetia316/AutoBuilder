// use to build a header
import React, { Component } from "react";
import "./index.scss";
import { Divider , Input ,Button } from 'antd';
const Search = Input.Search;


class UrlChange extends Component{
    constructor(props){
        super(props);
        this.state={
            resultUrl:"",
            setUrl:"",
            setTitle:""
        };
    }
    getUrl = (event)=>{
      this.setState({setUrl:event.target.value});
    }
    getTitle = (event)=>{
        this.setState({setTitle:event.target.value});
    }
    doCreate = ()=>{
        let urlInfo = this.state.setUrl;
        let titleInfo = this.state.setTitle;
        let stringUrl = "https://cloud.mall.changan.com.cn/caecapp/main/index.html#main/container-self.html?href=";
        if(!titleInfo || !urlInfo){
            this.setState({resultUrl:"*您还有信息没有输入，请检查！"});
            return;
        }
        this.setState({resultUrl:stringUrl+urlInfo+"&title="+encodeURIComponent(titleInfo)+"&isShare=true"});
    }
    render(){
        return (
            <div className="about">
                <div className="content">
                <h2>微信、H5地址转换工具<span className="desc">根据您输入的地址自动转换成用于外链地址。</span></h2>
                <Divider />
                <div className="cont">

                 <Input className="url-input" size="large" placeholder="请输入您要转换的地址" onChange={this.getUrl} />
                 <Input className="title-input" size="large" placeholder="请输入专题页标题" onChange={this.getTitle} />
                 <Button className="sure-bton" type="primary" size="large" onClick={this.doCreate}>确定</Button>
                 <div className="show-created">{this.state.resultUrl}
                 </div>
                </div>
                <Divider />
                <h3>欢迎使用该工具，有任何使用上的疑问或发现bug等，直接反馈给电商前端团队！</h3>
                </div>
          </div>  
       );
  }
};

export default UrlChange;
