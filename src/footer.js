import React from 'react';
import logo from './images/logo.png';


function Footer(){
    return(
        <div className='footer'>
            <div className="footerLogo">
                <img src={logo} alt=""/>
            </div>
            <div className="footerlinks">
                <h5><span style={style1} className='privacy'><a href="">Privacy & Cookies</a></span> Rai Griffioen & Pim Hakkert - Mintrexo</h5>
            </div>
        </div>
    );
}

var style1 = {
    color: '#98ff98',
    marginRight: '10px'
};

export default Footer;