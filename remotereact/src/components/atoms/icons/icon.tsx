import React from 'react';
import "./icons.css"

type IconsPropsType = {
    alternateName: string;
    imagePath: string;
}

export default function Icon(
    props: IconsPropsType
) {
    return (
        <div className='Icons-parent'>
            <img src={props.imagePath} alt={props.alternateName} />
        </div>
    )
}
