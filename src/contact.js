import React from 'react';


function contact() {





     const sendData = e => {
         e.preventDefault();

         let formfirstName = document.getElementById('formFirstName').value;
         let formlastName = document.getElementById('formLastName').value;
         let formemail = document.getElementById('formEmail').value;
         let formsubject = document.getElementById('formSubject').value;
         let formmessage = document.getElementById('formMessage').value;
         let successMessage = document.getElementById('message');



         const exampleFetch2 = async () => fetch('https://mintrexo.com/web_api/index.php?request=sendEmail&firstName=' + formfirstName +'&lastName=' + formlastName +'&email=' + formemail +'&subject=' + formsubject +'&message=' + formmessage , {
             method: 'GET',
             headers: {
                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
             }
         })
             .then(function(response){
                 return response.json();
             })
             .then(function(data){
                 console.log(data);
                 successMessage.innerHTML = "Message Sent";
             });


         exampleFetch2();
    };


    return (
        <div className='contact'>

            <h1 className={'title'}>Contact</h1>
            <div className="formContainer">
                <div className={'companyInfo'}>
                    <h3>Mintrexo Webdesign</h3>
                    <h4>KVK number: 75015579</h4>
                    <h4>VAT number: NL860109756B01</h4>
                    <h4>Address: Gravin Juliana van Stolberglaan 373, 2263AH Leidschendam, Netherlands</h4>
                    <h4>Email: info@mintrexo.com</h4>
                </div>
                <form action="" className="contactForm">
                    <label htmlFor="formFirstName">First name</label>
                    <input id='formFirstName' type="text" className="formFirstname"/>
                    <label htmlFor="formLastname">Last name</label>
                    <input id='formLastName' type="text" className="formLastname"/>
                    <label htmlFor="formEmail">Email</label>
                    <input id='formEmail' type="text" className="formEmail"/>
                    <label htmlFor="formSubject">Subject</label>
                    <input id='formSubject' type="text" className="formSubject"/>
                    <label htmlFor="formMessage">Message</label>
                    <textarea id='formMessage' name=""  cols="30" rows="10" className='formMessage'>

                    </textarea>
                    <button class="formSubmit" type="button" onClick={sendData} value={'Send'} className={'formSubmit'}>Send</button>
                    <div id="message"> </div>
                </form>
            </div>
        </div>
    )
}

export default contact;