import React from 'react'
import Text from '../../atoms/text/text';
import '../../molecules/cards/cards.css'

export default function Schemecardtext() {
    return (
        <div className='schemecard-parent'>
            <div className='schemecard-return-parent'>
                <p>Anualized return</p>
                <Text text='22.9 %' className="Annual-returnsText" />
            </div>
            <div className='schemecard-return-parent'>
                <p>Anualized return</p>

                <Text text='30.7 %' className="benchmartk-returnsText" />

            </div>

        </div>
    )
}
