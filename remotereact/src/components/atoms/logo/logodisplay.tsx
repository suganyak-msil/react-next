import React from 'react'
type mlogoPropsType = {
    path: string,
    alternateName: string,
}

export default function Logodisplay(props: mlogoPropsType) {
    return (
        <div>
            <img src={props.path} alt={props.alternateName} />
        </div>
    )
}
