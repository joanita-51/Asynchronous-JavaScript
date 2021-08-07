/**
 * Promises are used to handle asynchronous operations in JavaScript. 
 * They are easy to manage when dealing with multiple asynchronous operations where callbacks
 can create callback hell leading to unmanageable code.
 * 4 stages of a Promise :
 1. fulfilled: Action related to the promise succeeded
 2. rejected: Action related to the promise failed
 3. pending: Promise is still pending i.e not fulfilled or rejected yet
 4. settled: Promise has fulfilled or rejected
 */

 /**
 * @callback requestCallback -Promise constructor takes only one argument,a callback function.
 * @param {*} resolve -Perform operations inside the callback function and if everything went well then call resolve.
 * @param {string} reject -If desired operations do not go well then call reject.
 */

  const posts =[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];

  function getPosts() {
    setTimeout(()=>{
         let output = ''
         posts.forEach((post,index)=>{
             output += `<li>${post.title}</li>`
         });
         document.body.innerHTML= output;

    }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            
            if(!error){
                resolve();
            } else{
                reject('Error: Something went wrong')
            }
           
        },2000);
    });

}

createPost({title:'Post Three', body:'This is post three'})
.then(getPosts)
.catch(error=>console.log(error))