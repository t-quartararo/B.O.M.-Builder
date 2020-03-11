import React from "react"
import Button from '@material-ui/core/Button';

class ToolBar extends React.Component {  
    render() {
        return (
            <div id='box-2'>
                 <button class='tb-button' onClick ={this.props.addCallout}>Add Callout</button>
                 <button class='tb-button' onClick ={this.props.addLine}>Add Line</button>
                 <button class='tb-button' onClick ={this.props.addNotes}>Add Notes</button>
                 <input type='file' onChange={this.props.fileSelectedHandler}/>
                 <button class='tb-button' onClick={this.props.fileSubmitHandler}>Upload Sketch</button>
                {this.props.calloutComponents}
                {this.props.lineComponents}
            </div>
        )
    }      
}

export default ToolBar