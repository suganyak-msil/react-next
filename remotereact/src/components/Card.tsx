import React, { useEffect } from "react";

type CardProp = {
    title: string;
    content: string;
    onchange: (val: string) => void;
}
export default function Card(props: CardProp) {

    useEffect(() => {
        props.onchange("changed from client");
    },[]);

    return (
        <div style={{ border: "2px solid blue", padding: "12px", boxShadow: "1px 0px 16px 14px #d2d2d2" }}>
            <h1>
                hello client card
                {
                    props.title
                }
            </h1>
            <p>
                {props.content}
            </p>
        </div>
    )

}