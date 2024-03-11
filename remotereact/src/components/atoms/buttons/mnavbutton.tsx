import React from 'react';
import './mnavbutton.css';
type MFilledNavButtonPropsType = {
    buttonName: string | undefined;
    className: string;
    onClickNavButton: () => void | null;


}

export default function Navbutton(props: MFilledNavButtonPropsType) {

    const getClassName = (): string => {
        let classname: string = "mf-m-filled-navbutton" + props.className;
        return classname;
    }
    const handleButtonClick = () => {
        console.log("nav button has been clicked");
        props.onClickNavButton();

    }

    return (
        <button type="button"
            className={"navbutton " + getClassName()}
            onClick={handleButtonClick}


        >{props.buttonName}</button>
    )
}
