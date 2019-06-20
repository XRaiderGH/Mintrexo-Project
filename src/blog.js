import React, {useEffect, useState} from 'react';


const Blog = () => {

    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        getArticles();
    }, [query]);

    useEffect(() => {
        getArticles2();
    }, []);

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        console.log(search);
    };


    const getArticles = async () => await fetch('https://mintrexo.com/web_api/index.php?request=getArticles&article=' + query, {
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
            if(data!=='API ERROR: Wrong request') {
                setArticles(data.blogpostItem);
            }
        });

    const getArticles2 = async () => await fetch('https://mintrexo.com/web_api/index.php?request=getBlogposts', {
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
            setArticles(data.blog);

        });


    return (

        <div className='blogPage'>

            <div className="searchContainer">

                <form onSubmit={getSearch} className='search' action="">
                    <input className='searchText' type="text" onChange={updateSearch}/>
                    <button className='searchButton' type='submit'>Search</button>
                </form>

            </div>


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

        </div>


    );
};

export default Blog;