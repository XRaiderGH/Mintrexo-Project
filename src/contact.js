import React from 'react';


function contact() {
    return (
        <div className='contact'>
            <h1 className={'title'}>Contact</h1>
            <div className="formContainer">
                <form action="" className="contactForm">
                    First name <br/>
                    <input type="text" className="formFirstname"/><br/>
                    Last name <br/>
                    <input type="text" className="formLastname"/><br/>
                    E-mail <br/>
                    <input type="text" className="formEmail"/><br/>
                    Subject <br/>
                    <input type="text" className="formSubject"/><br/>
                    Message <br/>
                    <textarea name="" id="" cols="30" rows="10" className='formMessage'/>
                    <input type="submit" value={'Send'} className={'formSubmit'}/>
                </form>
            </div>
        </div>
    )
}

export default contact;