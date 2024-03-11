import React, { MouseEventHandler } from 'react'

type schemecardbuttonPropsType = {
    buttonName: string;
    buttonClassName: string;
    onclick: MouseEventHandler<HTMLButtonElement>;

}
export default function Mschemecardbutton(props: schemecardbuttonPropsType) {
    return (
        <button className={'schemecard ' + props.buttonClassName} onClick={props.onclick}>
            {props.buttonName}
        </button>
    )
}
