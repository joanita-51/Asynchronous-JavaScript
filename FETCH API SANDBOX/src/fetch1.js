document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUsers').addEventListener('click',getUsers);
document.getElementById('getPost').addEventListener('click',getPost);
document.getElementById('addPost').addEventListener('submit',addPost);

function getText(){
  //  fetch('sample.txt')
  //  .then(function(response){
  //      return response.text();
  //  })
  //  .then(function(data){
  //      console.log(data);
  //  })
  fetch('sample.txt')
  .then((response) =>response.text())
  .then((data)=>{
      document.getElementById('output').innerHTML = data;
  })
  .catch((error) => console.log(error))
}

function getUsers(){
    fetch('users.json')
    .then((response)=> response.json())
    .then((data) =>{
        let output = '<h2 class="mb-4">Users</h2>'
        data.forEach(user => {
           output += `
                <ul class='list-group'> 
                  <li class='list-group-item'> ID:${user.id}</li>
                  <li class='list-group-item'> Email:${user.email}</li>  
                  <li class='list-group-item'> FName:${user.first_name}</li> 
                  <li class='list-group-item'> LName:${user.last_name}</li>
                </ul>
            `;
        });
        document.getElementById('output').innerHTML=output
    })
}

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data)=>{
        let output = '<h2 class="mb-4">Posts</h2>'
        data.forEach(post =>{
            output +=`
                <div class='card card-body mb-3'>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
        })
        document.getElementById('output').innerHTML=output;
    })
}
function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'

        },
        body:JSON.stringify({title:title , body:body})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}