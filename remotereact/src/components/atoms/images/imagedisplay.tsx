import React from 'react'

type imagedisplayPropsType = {
    alternateName: string;
    imagepath: string;
}

export default function Imagedisplay(props: imagedisplayPropsType) {
    return (
        <div>
            <img src={props.imagepath} alt={props.alternateName} />
        </div>
    )
}
