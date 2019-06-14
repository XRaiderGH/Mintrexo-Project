import Image2 from "./images/profilepic.jpg";
import image1 from './images/Image1.png';
import React, {useEffect, useState} from 'react';


const Portfolio = () => {

    const [portfolioItems, setPortfolioItems] = useState([]);
    console.log(portfolioItems);

    useEffect(() => {
        getPortfolioItems();
    }, []);


    const getPortfolioItems = async () => await fetch('https://mintrexo.com/web_api/index.php?request=getPortfolio', {
        method: 'GET',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }

    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            setPortfolioItems(data.portfolioItem);
        });

    return (
        <div className='portfolio'>
            <div className="portfolioHeader">

                <div className="portfolioContainer">
                    {portfolioItems.map(portfolioItem => (
                        <div className="portfolioItem">
                            <img src={portfolioItem.image} alt=""/>

                            <div className="portfolioItemTitle">
                                <h1>{portfolioItem.titel}</h1>
                            </div>

                            <div className="portfolioItemContent">
                                {portfolioItem.text}
                            </div>

                            <div className="portfolioItemLink">
                                <a href={portfolioItem.link}>Live Link</a>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}


export default Portfolio;