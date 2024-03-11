import React, { MouseEventHandler } from 'react'
import Mschemecardbutton from '../../atoms/buttons/mschemecardbutton';

type schemefooterbuttonsPropsType = {
    onclickAddtocard: MouseEventHandler<HTMLButtonElement>;
    onclickInvest: MouseEventHandler<HTMLButtonElement>;

}
export default function Schemefooterbuttons(props: schemefooterbuttonsPropsType) {
    return (
        <div className='schemecard-footer-buttons'>
            <Mschemecardbutton buttonClassName='schemecard-button-left' onclick={props.onclickAddtocard}
                buttonName='Add to cart ' />
            <Mschemecardbutton buttonClassName='schemecard-button-right' buttonName='Invest ' onclick={props.onclickInvest} />

        </div>
    )
}
