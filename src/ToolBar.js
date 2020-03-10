import React from "react"
import Draggable, {DraggableCore} from 'react-draggable'

class ToolBar extends React.Component {  
    // constructor() {
    //     super()
    //     this.state = {
    //         activeDrags: 0,
    //         deltaPosition: {
    //           x: 0, y: 0
    //         },
    //         controlledPosition: {
    //           x: -400, y: 200
    //         },
    //         calloutComponents: [],
    //         lineComponents: []
    //     } 
    //     this.addCallout = this.addCallout.bind(this)
    //     this.addLine = this.addLine.bind(this)
    // }   
    
    // addCallout() {
    //     let joined = this.state.calloutComponents.concat(
    //         <Draggable
    //             handle=".handle"
    //             defaultPosition={{x: 0, y: 0}}
    //             position={null}
    //             grid={[25, 25]}
    //             scale={1}
    //             onStart={this.handleStart}
    //             onDrag={this.handleDrag}
    //             onStop={this.handleStop}>
    //             <div>
    //                 <div className="handle">+</div>
    //                 <input type='text'></input>
    //             </div>
    //         </Draggable>
    //     );
    //     this.setState({ calloutComponents: joined })
    // }

    // addLine() {
    //     let joined = this.state.calloutComponents.concat(
    //         <Draggable
    //             handle=".handle"
    //             defaultPosition={{x: 0, y: 0}}
    //             position={null}
    //             scale={1}
    //             onStart={this.handleStart}
    //             onDrag={this.handleDrag}
    //             onStop={this.handleStop}>
    //             <div>
    //                 <div className="handle">+</div>
    //                 <div className='line'></div>
    //             </div>
    //         </Draggable>
    //     );
    //     this.setState({ calloutComponents: joined })
    // }

    // handleDrag = (e, ui) => {
    //     const {x, y} = this.state.deltaPosition;
    //     this.setState({
    //       deltaPosition: {
    //         x: x + ui.deltaX,
    //         y: y + ui.deltaY,
    //       }
    //     });
    // };
    
    // onStart = () => {
    //     this.setState({activeDrags: ++this.state.activeDrags});
    // };
    
    // onStop = () => {
    //     this.setState({activeDrags: --this.state.activeDrags});
    // };
    
    render() {
        console.log(this.props)
        return (
            <div id='box-2'>
                 <button onClick ={this.props.addCallout}>Add Callout</button>
                 <button onClick ={this.props.addLine}>Add Line</button>
                 <input type='file'/>
                {this.props.calloutComponents}
                {this.props.lineComponents}
            </div>
        )
    }      
}

export default ToolBar