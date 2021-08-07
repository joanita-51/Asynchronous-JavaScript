/**
 * Callbacks are a great way to handle something after something else has been completed. By something here we mean a function execution. 
 * If we want to execute a function right after the return of some other function, then callbacks can be used.
 * Callbacks are primarily used while handling asynchronous operations like – making an API request to the Google Maps,
 fetching/writing some data from/into a file, registering event listeners and related stuff. 
 * All the operations mentioned uses callbacks. This way once the data/error from the asynchronous operation is returned, 
 the callbacks are used to do something with that inside our code.
 */

const posts =[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];
//The setTimeout() method executes a function, after waiting a specified number of milliseconds.
function getPosts() {
    setTimeout(()=>{
         let output = ''
         posts.forEach((post,index)=>{
             output += `<li>${post.title}</li>`
         });
         document.body.innerHTML= output;

    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },30000)
}

createPost({title:'Post Three', 
body:'This is post three'},getPosts);