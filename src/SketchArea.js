import React from "react";
import StyleForm from "./StyleForm.js"

function SketchArea(props) {   
    console.log(props)   
    return (
        <div id="box-1">
            <StyleForm />
            <div id='sketch-container'>
                <img src={props.currentSrc}></img>
            </div>
        </div>
    )
}

export default SketchArea