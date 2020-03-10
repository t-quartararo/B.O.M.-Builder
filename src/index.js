import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js"
import Body from "./SketchArea.js"
import ToolBar from "./ToolBar.js"

import styles from './sass/styles.scss'
import SketchArea from "./SketchArea.js";
import Dragtest from "./ToolBar.js";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      //holds sketch
    }
  }

  render() {
      return (
          <div id='body-grid'>
              <SketchArea />
              <ToolBar />
          </div>
      )
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));