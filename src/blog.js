import React from 'react';


const exampleFetch2 = async () => fetch('https://mintrexo.com/web_api/index.php', {
    method: 'POST',
    headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: 'request=getBlogposts'
})
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    });

exampleFetch2()

function blog() {
    return (
        <div className='contact'>
            
        </div>
    )
}

export default blog;