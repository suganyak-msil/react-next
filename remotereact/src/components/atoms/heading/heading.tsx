import React from 'react'
import "./heading.css";

type headingPropsType = {
    headerName: string;
    headingclassName: string;

}

export default function Heading(props: headingPropsType) {
    return (
        <div className={'header ' + props.headingclassName}>{props.headerName}</div>
    )
}
