import React from "react";
import App from "../App";
export default function Header() {
    const [user, setUser] = React.useState('joe')

    return (

        <div>
            <h1>Current user {user} </h1>
            <App user={user} />
        </div>
    )
}