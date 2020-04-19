import React from 'react'
import {FormattedMessage} from 'react-intl'

export default function Convertor(id, msg) {
    return <FormattedMessage id={id} defaultMessage={msg} />
}
