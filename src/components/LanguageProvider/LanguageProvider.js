import React, { useState } from 'react'
import {IntlProvider, FormattedMessage} from 'react-intl'
import defaultMessage from '../Quote/Messages'
import Convertor from '../Convertor/Convertor'

// import languages
import English from '../../translation/en.json'
import Armenian from '../../translation/arm.json'
import French from '../../translation/fr.json'
import Russian from '../../translation/ru.json'

function LanguageProvider(props) {
    // state
    const [locale, setLocale] = useState('en')
    const [lang, setLang] = useState(English)

    const changeLang = (getLang) => {
        
        // set locale
        setLocale(getLang)
        
        // change language files
        switch (getLang) {
            case 'en': 
                setLang(English);
                break;
            case 'arm':
                setLang(Armenian);
                break;
            case 'fr': 
                setLang(French);
                break;
            case 'ru':
                setLang(Russian);
                break;
            default:
                setLang(English);
        }
    }
    return(
        <IntlProvider locale={locale} messages={lang}>
            <div className="text-center">
                <p>
                    <FormattedMessage
                        id="change"
                        defaultMessage={defaultMessage.quote.change}
                    />
                    {/*Convertor('change', defaultMessage.quote.change )*/}
                </p>
              
                <p>
                    <button onClick={ ()=> changeLang('en')}>English</button>
                    <button onClick={ ()=> changeLang('arm')}>Armenian</button>
                    <button onClick={ ()=> changeLang('fr')}>French</button>
                    <button onClick={ ()=> changeLang('ru')}>Russian</button>
                </p>
                
            </div>
            <div className='text-center'>
                {props.children}
            </div>
        </IntlProvider>
 
    )
}
export default LanguageProvider