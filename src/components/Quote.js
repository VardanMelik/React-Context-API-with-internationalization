import React from 'react'
import { 
    FormattedMessage, 
    FormattedDate, 
    FormattedNumber } from 'react-intl'

function Quote() {
    return (
        <div className="container">
            <FormattedMessage
                id="title"
                defaultMessage="Quote"
            />
        </div>
    )
}
export default Quote