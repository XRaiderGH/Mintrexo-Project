import React from 'react';

function about(){
    return(
        <div className={'about'}>

            <div className="aboutOne">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                    <g id="Ellipse_10" data-name="Ellipse 10" fill="#fff" stroke="#707070" stroke-width="1">
                        <circle cx="150" cy="150" r="150" stroke="none"/>
                        <circle cx="150" cy="150" r="149.5" fill="none"/>
                    </g>
                </svg>
                <div className='aboutOneText'>
                    <h1>Rai Griffioen</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores, beatae, doloremque impedit incidunt ipsa laborum modi necessitatibus numquam odit omnis placeat praesentium recusandae repudiandae, vero voluptatem voluptates voluptatum. Quae.</p>
                </div>
            </div>

            <div className="aboutTwo">
                <div className='aboutOneText'>
                    <h1>Pim Hakkert</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores, beatae, doloremque impedit incidunt ipsa laborum modi necessitatibus numquam odit omnis placeat praesentium recusandae repudiandae, vero voluptatem voluptates voluptatum. Quae.</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                    <g id="Ellipse_10" data-name="Ellipse 10" fill="url('images/Image1.png')" stroke="#707070" stroke-width="1">
                        <circle cx="150" cy="150" r="150" stroke="none"/>
                        <circle cx="150" cy="150" r="149.5" fill="none"/>
                    </g>
                </svg>

            </div>


        </div>


    );
}

var style1 = {
    bottom : '0'
};

export default about;