const http = new easyFetch;

//Get Users

document.getElementById('get').addEventListener('click', getIT);
document.getElementById('post').addEventListener('click', postIT);
document.getElementById('put').addEventListener('click', putIT);
document.getElementById('delete').addEventListener('click', deleteIT);


function getIT(){
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
//data
const data = {
    name: 'john doe',
    usename: 'johndoe',
    email: 'jdoe@gmail.com'
}

function postIT(){
    http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log(err)
    })
}
//put
function putIT(){
http.put('https://jsonplaceholder.typicode.com/users/1', data)
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log(err)
    })
}

function deleteIT(){
http.delete('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}