import React from "react";
export default function JokeT(props) {
    const [isShown, setisShown] = React.useState(true)
    const [msg, setMsg] = React.useState([])

    const [state, setState] = React.useState(true)

    function toggleShown() {
        setisShown(prevShown => !prevShown)
        setState(prevMsg => !prevMsg)
    }
    //state ? 'Hide' : 'Show' ternary operator
    return (
        <div>
            {<h3>{props.setup}</h3>}
            <br />
            {isShown && props.punchline}
            <br />
            <button onClick={toggleShown}>{state ? 'Hide' : 'Show'} Punchline</button>
            <hr />
            {/* {(msg.length > 0) && <h1>You Have Unread message!</h1>} */}
        </div>
    )
} 