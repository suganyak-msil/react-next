import React from 'react'
import withLayout from '../../organisms/hoccomponent/hoccomponenet'
import { TextWithSuggestion } from '../../molecules/forminputs/textinputs/TextWithSuggestion';
import SchemeCard from '../../organisms/schemes/SchemeCard';
import { schemeHeaders } from '../../../helpers/constants';
import hamburgerImg from "../../../assets/images/hamburger.png";
import "../../../assets/css/pre-login/landing.css";

function LandingPage() {
    return (
        <>

            <div className='schemecard-group'>
                {schemeHeaders.map((schemeData) => {
                    return <SchemeCard
                        alternateName='hamburger-icon'
                        headername={schemeData.title}
                        headingclassName='scheme-title'
                        imagePath={hamburgerImg}
                        subHeadername={schemeData.subtitle}
                        subheadingclassName=''
                    />
                })}

            </div>
        </>
    )
}
export default withLayout(LandingPage);