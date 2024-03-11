import React from 'react';
import Heading from '../../atoms/heading/heading';
import Icon from '../../atoms/icons/icon';
import './cards.css'

type headerwithiconPropsType = {
    headerName: string;
    headingclassName: string;
    alternateName: string;
    imagePath: string;

}

export default function HeadingWithIcons(props: headerwithiconPropsType) {
    return (
        <div className='headerwithicons-parent'>
            <Heading
                headingclassName={props.headingclassName}
                headerName={props.headerName} />
            <Icon alternateName={props.alternateName}
                imagePath={props.imagePath}
            />

        </div>
    )
}
