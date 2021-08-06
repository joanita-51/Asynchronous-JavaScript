let fetchData = () => {
    console.log("START FETCH")
    fetch('https://reqres.in/api/users?page=2')
    .then(response =>{
        if(!response.ok){                                                         // this helps to prevent the code from running when there is an error
            throw Error ("ERROR");
        }
       return response.json();                                                       //this is also a promise
    })
    .then(data =>{                                                                   //chaining
        console.log(data.data)                                                       //this helps us to get the actual array that we would want to work with
        const HTML = data.data
        .map(user =>{                                                                //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
            return `
            <div class = 'user'>
            <p><img src = "${user.avatar}" alt = "${user.first_name}" /></p>
            <p>Name: ${user.first_name}</p>
            <p>Email: ${user.email}</p>
            </div>
            `; 
        }) .join(' ')// to convert the returned array into a string
        console.log(HTML)
        document.querySelector('#app').innerHTML= HTML
    })
    .catch(error =>{  //check for errors
      console.log(error)  
    })
}
fetchData();


let postData = () => {
    console.log("UPLOAD")
    fetch('https://reqres.in/api/users',{
        method: "POST",
        headers: {
            "content-Type" :"application/json"
        },
        body: JSON.stringify (
            {
                "name": "morpheus",
                "job": "leader"
            }
        )
    })
    .then(response =>{
        if(!response.ok){        
            throw Error ("ERROR");
        }
       return response.json(); 
    })
    .then(data =>{
        console.log('Success:', data) 
        
    })
    .catch(error =>{ 
      console.log(error)  
    })
}
postData();

