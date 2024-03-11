import React from 'react';
import { MFilledTextBox } from '../../../atoms/textinputs/mfilledtextbox/MFilledTextBox';
import '../../../atoms/label/labels.css';

type TextWithSuggestionPropsType = {
    title: string;
    value: string | null;
    inputtype: string;
    suggestion?: string;
    error?: string;
    disabled: boolean;
    isError: boolean | null;
    label: string | null;

    onChange: (value: string) => void;
    onEnterPress: () => void | null;
    onFocus: () => void | null;
    onFocusOut: () => void | null;

};


export const TextWithSuggestion = (props: TextWithSuggestionPropsType) => {


    return (
        <div>
            <label className="lbl-form-title mb-8">{props.title}</label>

            <MFilledTextBox
                value={props.value}
                type={props.inputtype}
                disabled={props.disabled}
                onChange={props.onChange}
                onEnterPress={props.onEnterPress
                }
                label={props.label}
                isError={props.isError}
                onFocus={props.onFocus}
                onFocusOut={props.onFocusOut}
            />

            {props.error ?
                <label className="lbl-form-error error-txt">{props.error}</label>
                :
                props.suggestion ?
                    <label className="lbl-form-suggestion">{props.suggestion}</label>
                    :
                    ''
            }
        </div>
    )

}