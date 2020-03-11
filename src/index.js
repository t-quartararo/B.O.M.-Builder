import React from "react";
import ReactDOM from "react-dom";
import Draggable, {DraggableCore} from 'react-draggable'
import styles from './sass/styles.scss'
import SketchArea from "./SketchArea.js";
import ToolBar from "./ToolBar.js"

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

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
        selectedFile: null,
        calloutId: 0
    } 
    this.addCallout = this.addCallout.bind(this)
    this.addLine = this.addLine.bind(this)
    this.deleteCallout = this.deleteCallout(this)
} 

fileSelectedHandler = event => {
  this.setState({
    selectedFile: event.target.files[0]
  })
}

fileSubmitHandler = () => {
  console.log(this.state.selectedFile)
}

addCallout() {
    let joined = this.state.calloutComponents.concat(
        <Draggable
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[25, 25]}
            scale={1}
            deleteCallout={this.deleteCallout}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div className='callout' id={this.state.calloutId} >
                <div className="handle">+</div>
                <input type='text'></input>
                <button onClick={this.props.deleteCallout}>X</button>
            </div>
        </Draggable>
    );
    this.setState(prevState => ({
      calloutComponents: joined,
      calloutId: prevState.calloutId + 1
    }))
}

deleteCallout(e) {
  console.log("delete")
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
              <ToolBar 
              {...this.state} 
              addCallout={this.addCallout} 
              addLine={this.addLine} 
              fileSelectedHandler={this.fileSelectedHandler}
              fileSubmitHandler={this.fileSubmitHandler} />
          </div>
      )
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));