import React from 'react';
import Icon from '../../atoms/icons/icon';
import Navbutton from '../../atoms/buttons/mnavbutton';


type menuWithIconProps = {
    alternateName: string;
    imagePath: string;
    buttonName: string | undefined;
    className: string;
    onClickNavButton: () => void | null;


}

export default function MenuWithIcons(props: menuWithIconProps) {

    return (
        <div className='menuicons-parent'>
            <Icon alternateName={props.alternateName} imagePath={props.imagePath} />
            <Navbutton buttonName={props.buttonName} className={props.className} onClickNavButton={props.onClickNavButton} />

        </div>
    )
}
