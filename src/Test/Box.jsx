import React from "react";
import '../index.css'
export default function Box(props) {
    const [state, setState] = React.useState(props.on)
    console.log(state)
    const style = {
        backgroundColor: props.on ? '#222222' : 'red'
    }

    function toggleClick() {
        setState(preState => !preState)
    }

    return (
        <div
            onClick={() => props.handleToggle(props.id)}
            className="box"
            style={style}>

        </div>
    )
} 