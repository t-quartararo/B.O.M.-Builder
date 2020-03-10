import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js"


class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
      return (
          <div>
              <Header />
              {/* <Body />
              <ToolBar /> */}
          </div>
      )
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));