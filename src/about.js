import React from 'react';
import Image1 from './images/profilepicpim.jpg';
import Image2 from './images/profilepic.jpg';

function about(){
    return(
        <div className={'about'}>

            <div className="aboutOne aboutDiv">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                    <defs>
                        <pattern id="image" x="0" y="0" patternUnits="userSpaceOnUse" height="100%" width="100%">
                            <image x="0" y="-10%" xlinkHref={Image2} height="135%" width="100%" />
                        </pattern>
                    </defs>
                    <g id="Ellipse_10" data-name="Ellipse 10" fill="url(#image)" stroke="#707070" strokeWidth="1">
                        <circle cx="150" cy="150" r="150" stroke="url(#image)"/>
                        <circle cx="150" cy="150" r="149.5" fill="url(#image)"/>
                    </g>
                </svg>
                <div className='aboutOneText'>
                    <h1>Rai Griffioen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores, beatae, doloremque impedit incidunt ipsa laborum modi necessitatibus numquam odit omnis placeat praesentium recusandae repudiandae, vero voluptatem voluptates voluptatum. Quae.</p>
                </div>
            </div>

             <div className="aboutTwo aboutDiv">
                <div className='aboutOneText'>
                    <h1>Pim Hakkert</h1>
                    <p>Pim Hakkert is a dedicated full stack developer. He designs and creates the back-end features on websites and assists in front-end functionality. One of his strong points is being able to create and maintain a secure and efficient back-end structure.
                        Pim enjoys programming  websites and going to events to sharpen up his skills. <br/><br/>

                        One of Pim’s favourite quote’s is: “It always seems impossible until it’s done.” – Nelson Mandela</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                    <defs>
                        <pattern id="image2" x="0" y="0" patternUnits="userSpaceOnUse" height="100%" width="100%">
                            <image x="0" y="-10%" xlinkHref={Image1} height="120%" width="100%" />
                        </pattern>
                    </defs>
                    <g id="Ellipse_10" data-name="Ellipse 10" fill="url(#image2)" stroke="#707070" strokeWidth="1">
                        <circle cx="150" cy="150" r="150" stroke="url(#image2)"/>
                        <circle cx="150" cy="150" r="149.5" fill="url(#image2)"/>
                    </g>
                </svg>

            </div>


        </div>


    );
}


export default about;