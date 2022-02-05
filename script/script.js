let username = document.querySelector('.username-input');
let msgUsername = document.querySelector('.msg-username');
let pssword = document.querySelector('.password-input');
let msgPassword = document.querySelector('.msg-password');
let button = document.querySelector('button');
let msgSucessful = document.querySelector('.msg-sucessful');

button.addEventListener('click' , singin);
function singin(event){
    event.preventDefault();
    msgPassword.innerText="";
    msgUsername.innerText="";
    let usernameValue = username.value;
    let passwordValue = pssword.value;
    let ifSendData =true;
    if (usernameValue.length === 0 || usernameValue.indexOf('@') === -1 || usernameValue.indexOf('.') === -1){
        msgUsername.innerText = "please enter corect username"
        ifSendData =false;
    }
    if (passwordValue.length===0){
        msgPassword.innerText="plase enter password";
        ifSendData =false;
    }else if (passwordValue.length<4){
        msgPassword.innerText="plase enter password most of 4";
        ifSendData =false;
    }
    if (ifSendData){
        let body = JSON.stringify({
            username :usernameValue,
            password : passwordValue,
        });
        const header = { "Content-Type": "application/json"};
        fetch('https://jsonplaceholder.typicode.com/posts' , {
            method : "post" ,
            body : body,
            headers : header
        })
        .then(response => {
            if(response.ok) {
                msgSucessful.innerHTML = "You signed in successfully";
            }
        })  
    }
}