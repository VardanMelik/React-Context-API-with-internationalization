import React from 'react'
import { 
    FormattedMessage, 
    FormattedDate, 
    FormattedNumber } from 'react-intl'
import defaultMessage from './Messages'


function Quote() {
    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-col" 
                    style={{ padding: '0 20px 0 10px', flex: 1 }}>

                </div>
                <div className="flex-col">
                    ...........
                </div>
            </div>    
            <h1>  
                <FormattedMessage
                    id="title"
                    defaultMessage={defaultMessage.quote.title}
                />
            </h1>
            <p style={{ fontSize: 20}}>
                <FormattedMessage
                    id="text"
                    defaultMessage=
                    {defaultMessage.quote.text}
                />
            </p>
            <p>
                <FormattedMessage
                    id="person"
                    defaultMessage=
                    {defaultMessage.quote.person}
                    
                />
            </p>
            <div className="flex-col"
                style={{ 
                    width: 300, 
                    padding: 20,
                    backgroundColor: '#eee'}}
            >
                <FormattedDate
                    value={new Date()}
                    year='numeric'
                    month='long'
                    day='numeric'
                    weekday='long'
                />
                <br/>        
                <FormattedNumber
                    value={10000}
                    style='unit'
                    unit='kilobyte'
                    unitDisplay='narrow'
                />
                <br/>
                <FormattedNumber
                    value={10000000}
                    style='unit'
                    unit='fahrenheit'
                    unitDisplay='narrow'
                />           

            </div>
        </div>
    )
}
export default Quote