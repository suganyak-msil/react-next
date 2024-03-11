import React from 'react';
import "./heading.css";

type subHeadingPropsType = {
    subHeadername: string;
    subheadingclassName: string;
}

export default function Subheading(props: subHeadingPropsType) {
    return (
        <div className={'subheader' + props.subheadingclassName}>{props.subHeadername}</div>
    )
}
