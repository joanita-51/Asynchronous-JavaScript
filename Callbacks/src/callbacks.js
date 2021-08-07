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