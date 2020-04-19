import React from 'react'
import { 
    FormattedMessage, 
    FormattedDate, 
    FormattedNumber } from 'react-intl'
import defaultMessage from './Messages'

function Quote() {
    return (
        <div className="container">
            <FormattedMessage
                id="title"
                defaultMessage={defaultMessage.quote.title}
            />
            <FormattedMessage
                id="text"
                defaultMessage=
                {defaultMessage.quote.text}
            />
        </div>
    )
}
export default Quote