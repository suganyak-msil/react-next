import React, { useState, useRef } from 'react';
import "./mfilledtextbox.css";

type MFilledTextBoxPropsType = {
    className?: string;
    type: string | null;
    value: string | null;
    label: string | null;
    disabled: boolean | null;
    isError: boolean | null;
    onChange: (value: string) => void | null
    onEnterPress: () => void | null;
    onFocus: () => void | null;
    onFocusOut: () => void | null;
};

type MFilledTextBoxVarstoreType = {
    inputField: HTMLInputElement | null
};

export const MFilledTextBox = (props: MFilledTextBoxPropsType) => {

    let varstore = useRef<MFilledTextBoxVarstoreType>({ inputField: null });
    const [isFocused, setIsFocused] = useState<boolean>(false);

    // ============================================================

    const getClassName = (): string => {
        let classname: string = "mf-m-filled-textfield mftb-primary " + props.className;
        if (isFocused) classname += " focused"
        if (props.disabled) classname += " disabled";
        if (props.isError) classname += " error";

        return classname;
    }

    const getLabelName = (): string => {
        let labelName: string = "input-label";
        if (props.value) labelName += " up";
        if (props.isError) labelName += " error";
        return labelName;
    }

    const onKeyPress = (e: { keyCode: number; }) => {
        if (e.keyCode === 13 && props.onEnterPress)
            props.onEnterPress();
    }

    // ============================================================

    return (
        <div className={getClassName()}
            onClick={() => {
                varstore.current.inputField?.focus();
                setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
        >
            <input
                ref={(elem) => varstore.current.inputField = elem}
                type={props.type ?? ""}
                value={props.value ?? ""}
                disabled={props.disabled ?? false}

                onChange={(e) => props.onChange && props.onChange(e.target.value)}
                onKeyDown={onKeyPress}
                onFocus={() => props.onFocus && props.onFocus()}
                onBlur={() => props.onFocusOut && props.onFocusOut()}

            />
            <label className={getLabelName()}>
                {props.label ?? ""}
            </label>
        </div>
    )
}