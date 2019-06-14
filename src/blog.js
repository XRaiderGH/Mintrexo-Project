import React,{useEffect, useState} from 'react';


const Blog = () => {

const[articles, setArticles] = useState([]);
console.log(articles);

useEffect( () => {
    getArticles();
}, []);




const getArticles = async () => await fetch('https://mintrexo.com/web_api/index.php?request=getBlogposts', {
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
        setArticles(data.blog);
    });


return(
    <div className="articles">
        {articles.map(blog => (
            <div className="blogContainer">

                <div className="blogHeader">
                    <h1>{blog.titel}</h1>
                </div>

                <div className="blogImage">
                    <img src={blog.image_url} alt=""/>
                </div>

                <div className="blogContent">
                    <p>{blog.text}</p>
                </div>

                <div className="blogFooter">
                    <p>{blog.datum}</p>
                </div>

            </div>
        ))}
    </div>
);
};

export default Blog;