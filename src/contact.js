import React from 'react';


function contact() {

    let formfirstName = document.getElementById('formFirstName');
    let formlastName = document.getElementById('formLastName');
    let formemail = document.getElementById('formEmail');
    let formsubject = document.getElementById('formSubject');
    let formmessage = document.getElementById('formMessage');



     const sendData = e => {
         e.preventDefault();
         console.log('test');



         const exampleFetch2 = async () => fetch('https://mintrexo.com/web_api/index.php?request=sendEmail?firstName=' + formfirstName.value +'&' + formlastName.value +'&' + formemail.value +'&' + formsubject.value +'&' + formmessage.value , {
             method: 'GET',
             headers: {
                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
             }
         })
             .then(function(response){
                 return response.json();
             })
             .then(function(data){
                 console.log(data)
             });


         exampleFetch2();
    };


    return (
        <div className='contact'>
            <h1 className={'title'}>Contact</h1>
            <div className="formContainer">
                <form onSubmit={sendData} action="" className="contactForm">
                    First name <br/>
                    <input id='formFirstName' type="text" className="formFirstname"/><br/>
                    Last name <br/>
                    <input id='formLastName' type="text" className="formLastname"/><br/>
                    E-mail <br/>
                    <input id='formEmail' type="text" className="formEmail"/><br/>
                    Subject <br/>
                    <input id='formSubject' type="text" className="formSubject"/><br/>
                    Message <br/>
                    <textarea id='formMessage' name="" id="" cols="30" rows="10" className='formMessage'/>
                    <button type="button" onClick={sendData} value={'Send'} className={'formSubmit'}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default contact;