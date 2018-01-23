import React, { Component } from "react";
import OptPanel from "../OptPanel";
import FileUpload from "../FileUpload";
import "./index.scss";

class MainPanel extends Component {
  constructor() {
    super();
  }
  render(props) {
    return (
      <div>
        <OptPanel onClick={this.props.choosedImg} />
        <FileUpload />
      </div>
    );
  }
}
export default MainPanel;
