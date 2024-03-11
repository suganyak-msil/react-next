import React, { useState, useRef, useTransition } from 'react';
import HeadingWithIcons from '../../molecules/cards/HeadingWithIcons';
import Subheading from '../../atoms/heading/subheading';
import Schemefooterbuttons from '../../molecules/cards/schemefooterbuttons';
import Horizontaldivider from '../../atoms/divider/horizontaldivider';
import Schemecardtext from './schemecardtext';
import Text from '../../atoms/text/text';
import { TextWithSuggestion } from '../../molecules/forminputs/textinputs/TextWithSuggestion';
import Mschemecardbutton from '../../atoms/buttons/mschemecardbutton';
import Imagedisplay from '../../atoms/images/imagedisplay';
import bannerImg from "../../../assets/images/right-side-img.svg";
import Icon from '../../atoms/icons/icon';
import closeImg from "../../../assets/images/close.png"; 
import './schemecard.css';

type schemecardPropsType = {
    headername: string;
    headingclassName: string;
    alternateName: string;
    imagePath?: string;
    subHeadername: string;
    subheadingclassName: string;

}


export default function SchemeCard(props: schemecardPropsType) {
    const [isOpen, isSetOpen] = useState(false);
    const [pannum, setPanNum] = useState('');
    const [incorrectPan, setIncorrectPan] = useState(false);
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    const handleInvestPopup = () => {
        isSetOpen(!isOpen);
    }

    const handleOtp = () => {

    }
    return (
        <div className='schemeCard-parent'>
            <HeadingWithIcons
                alternateName={props.alternateName}
                headerName={props.headername}
                headingclassName={props.headingclassName}
                imagePath={props.imagePath || ""} />
            <Subheading
                subHeadername={props.subHeadername}
                subheadingclassName={props.subheadingclassName} />
            <Horizontaldivider />

            <div className='schemecard-body'>

                <Schemecardtext />
                <Horizontaldivider />

            </div>
            <Text text='Worth of investment since inception' className="schemefooter-text" />
            <Text text='10,000 investment grown to ' subtext=' 15000' className=" schemefooter-text" />


            <Schemefooterbuttons onclickAddtocard={() => {
                // console.log(window.location,"1")
                window.location.href = "http://localhost:3000/button";
                // window.history.pushState({}, "", "http://localhost:3000/button");
                // console.log(window.location)
            }} onclickInvest={handleInvestPopup} />
            {isOpen ?
                <div className='popup'>
                    <div className="popup-content popup-parent">
                        <div className='popup-form'>

                            <div className='schemepopup-header'>
                                <Text text='Login to Proceed' className='popup-scheme-header' />
                            </div>
                            <div className='schemepopup-body'>
                                <div className='popupscheme-input'>
                                    <TextWithSuggestion
                                        disabled={false}
                                        inputtype='text'
                                        isError={false}
                                        onChange={(e) => {
                                            console.log("eeee", e);
                                            setPanNum(e)
                                            if (regex.test(e) == false) {
                                                setIncorrectPan(true);
                                            }
                                            else {
                                                setIncorrectPan(true);
                                            }


                                        }}
                                        onEnterPress={() => {

                                        }}
                                        onFocus={() => {

                                        }}
                                        onFocusOut={() => {

                                        }}
                                        title=''
                                        label={"Enter Pan "}
                                        value={pannum}
                                        error={incorrectPan && pannum.length > 0 ? 'Enter Valid Pan ' : ''}
                                    />
                                </div>
                                <div className='popupscheme-input'>

                                    <TextWithSuggestion
                                        disabled={false}
                                        inputtype='text'
                                        isError={false}
                                        onChange={(e) => {
                                            console.log("event", e);

                                        }}
                                        onEnterPress={() => {

                                        }}
                                        onFocus={() => {

                                        }}
                                        onFocusOut={() => {

                                        }}
                                        title=''
                                        label={"Enter Otp "}
                                        value={''}
                                    />
                                </div>
                                <Mschemecardbutton buttonClassName='popupbtn' buttonName='Generate OTP' onclick={handleOtp} />
                                <Text text='Locked user Id ?' className='scheme-locked' />
                            </div>
                            <div className='schemepopup-footer'>
                                <Text text='Dont have an account with us ? .' className='schemepopupfooter' subtext=' Register' />

                            </div>
                        </div>
                        <div className='popup-banner'>
                            <Imagedisplay alternateName='banner' imagepath={bannerImg} />
                            <div className='close-banner-icon' onClick={handleInvestPopup}>
                                <Icon alternateName='close' imagePath={closeImg} />
                            </div>
                        </div>
                    </div>

                </div> : ''}


        </div>
    )
}
