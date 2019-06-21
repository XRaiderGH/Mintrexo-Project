import React from 'react';
import logo from './images/logo.png';



function Footer(){
    return(
        <div className='footer'>
            <div className="footerLogo">
                <img src={logo} alt=""/>
            </div>
            <div className="footerlinks">
                <h5><span style={style1} className='privacy'><a href="http://mintrexo.com/legal/Privacyverklaring_privacystatement.pdf" target="_blank" rel="noopener noreferrer">Privacy & Cookies</a></span>Mintrexo Webdesign - KVK Number: 75015579</h5>
            </div>
        </div>
    );
}

var style1 = {
    color: '#98ff98',
    marginRight: '10px'
};

export default Footer;