import React from "react"
import { TwitterPicker, SketchPicker } from 'react-color'

class ToolBar extends React.Component {  
    render() {
        return (
            <div id='box-2'>
                 <button class='tb-button' onClick={this.props.addCallout}>Add Callout</button>
                 <button class='tb-button' onClick={this.props.addLine}>Add Line</button>
                 <button class='tb-button' onClick={this.props.addNotes}>Add Notes</button>
                 <input type='file' onChange={this.props.fileSelectedHandler}/>
                 <button class='tb-button' onClick={this.props.fileSubmitHandler}>Upload Sketch</button>
                 
                 {/* <form action="/upload" method="post" enctype="multipart/form-data">
                    <input type="file" accept="image/*" name="photo" />
                    <input type="submit" value="upload"/>
                </form> */}
                {this.props.calloutComponents}
                {this.props.lineComponents}
            </div>
        )
    }      
}

export default ToolBar