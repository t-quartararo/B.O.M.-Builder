import React from "react";
import ReactDOM from "react-dom";
import Draggable, {DraggableCore} from 'react-draggable'
import styles from './sass/styles.scss'
import SketchArea from "./SketchArea.js";
import ToolBar from "./ToolBar.js"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        },
        calloutComponents: [],
        lineComponents: [],
        sketchSRC: ''
    } 
    this.addCallout = this.addCallout.bind(this)
    this.addLine = this.addLine.bind(this)
}   

addCallout() {
    let joined = this.state.calloutComponents.concat(
        <Draggable
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
                <div className="handle">+</div>
                <input type='text'></input>
            </div>
        </Draggable>
    );
    this.setState({ calloutComponents: joined })
}

addLine() {
    let joined = this.state.calloutComponents.concat(
        <Draggable
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
                <div className="handle">+</div>
                <div className='line'></div>
            </div>
        </Draggable>
    );
    this.setState({ calloutComponents: joined })
}

handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
};

onStart = () => {
    this.setState({activeDrags: ++this.state.activeDrags});
};

onStop = () => {
    this.setState({activeDrags: --this.state.activeDrags});
};


  render() {
      return (
          <div id='body-grid'>
              <SketchArea />
              <ToolBar {...this.state} addCallout={this.addCallout} addLine={this.addLine} />
          </div>
      )
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));