import React from "react"
import { TwitterPicker, SketchPicker } from 'react-color'

class ToolBar extends React.Component {  
    render() {
        return (
            <div id='box-2'>
                <h3 id='logo'>Tech Pack Builder 1.0</h3>
                 <input class='input-file' type='file' onChange={this.props.fileSelectedHandler}/>
                 <button class='tb-button' onClick={this.props.fileSubmitHandler}>Load Sketch</button>
                 <button class='tb-button' onClick={this.props.fileLoadHandler}>Place Sketch</button>
                 <button class='tb-button' onClick={this.props.addCallout}>Add Callout</button>
                 <button class='tb-button' onClick={this.props.addLine}>Add Line</button>
                 <button class='tb-button' onClick={this.props.addNotes}>Add Notes</button>
                 {/* <button id='save-btn' class='tb-button'>Save</button> */}
                {this.props.calloutComponents}
                {this.props.lineComponents}
            </div>
        )
    }      
}

export default ToolBar