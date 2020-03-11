import React from "react"


class ToolBar extends React.Component {  
    render() {
        return (
            <div id='box-2'>
                 <button onClick ={this.props.addCallout}>Add Callout</button>
                 <button onClick ={this.props.addLine}>Add Line</button>
                 <button onClick ={this.props.addLine}>Add Notes</button>
                 <input type='file' onChange={this.props.fileSelectedHandler}/>
                 <button onClick={this.props.fileSubmitHandler}>Upload Sketch</button>
                {this.props.calloutComponents}
                {this.props.lineComponents}
            </div>
        )
    }      
}

export default ToolBar