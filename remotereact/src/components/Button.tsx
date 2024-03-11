import React, { useEffect } from "react";


export default function Button() {
    useEffect(() => {
        console.log("hello from client");
    }, [])
    return <button>
        React button in client
    </button>
}