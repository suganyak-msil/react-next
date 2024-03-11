import React from 'react'
import axisLogo from "../../../assets/images/axislogo.png";
import Logodisplay from '../../atoms/logo/logodisplay';
import { navigationMenus } from '../../../helpers/constants';
import Navbutton from '../../atoms/buttons/mnavbutton';
import MenuWithIcons from '../../molecules/navbar/MenuWithIcons';
import callMenu from "../../../assets/images/phone-call.png";
import './navbar.css';

export default function Headercomponent() {
    const handleNavigation = () => {

    }
    return (
        <div className='navbar-parent'>

            <div className='navbar-logo'>

                <Logodisplay
                    alternateName='logo'
                    path={axisLogo}
                />
            </div>
            <div className='navbar-menu'>
                {navigationMenus.map((item) => {
                    return (
                        item?.type == 'menu' ? <Navbutton buttonName={item?.name} className=''
                            onClickNavButton={handleNavigation} /> : <MenuWithIcons alternateName='call-icon' buttonName={item?.name}
                                className=''
                                imagePath={callMenu}
                                onClickNavButton={handleNavigation} />)

                })}
            </div>
        </div>
    )
}
