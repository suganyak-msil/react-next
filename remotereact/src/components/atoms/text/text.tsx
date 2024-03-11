import React from 'react'

import "./text.css";
type textPropsType = {
    text: string;
    className: string;
    subtext?: string;
}
export default function Text(props: textPropsType) {
    return (
        <div className={props.className}>{props.text} <span className='subtext-scheme'>{props?.subtext}</span></div>
    )
}
