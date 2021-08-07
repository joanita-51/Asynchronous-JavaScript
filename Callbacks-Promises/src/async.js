/**
 * An async function is a function declared with the async keyword, and the await keyword is permitted within them. 
 * The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, 
 avoiding the need to explicitly configure promise chains.
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
async function init (){
    await createPost({title:'Post Three', body:'This is post three'})
    getPosts();
}
init();