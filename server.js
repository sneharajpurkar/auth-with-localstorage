function register(event){
    event.preventDefault();
    //get data from html to js
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = {name : userName, email : userEmail, password : userPassword}
    //storing data from js to ls
    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, 'dataFromLS')
    var flag = false;
    for(var i=0; i<dataFromLS.length; i++){
        if(dataFromLS[i].email === userEmail){
            flag = true;
        }
    }
    if(flag === true){
        alert("Email already present, use another one")
    } else if(userPassword.length < 1 && userName.length < 1 && userEmail.length < 1 ){
        alert("must fill all fields")
    }else if (userPassword.length < 8 ){
        alert("password must be more than 8 digit")
    } else {
        dataFromLS.push(userData);
        localStorage.setItem("userData",JSON.stringify(dataFromLS));
        document.getElementById("userName").value =" ";
        document.getElementById("userEmail").value =" ";
        document.getElementById("userPassword").value = " ";
        window.location.href = "/login.html";
        alert("Registration done");

    }
}

function login(event){
    event.preventDefault();
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userData = {email : userEmail, password : userPassword}

    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, 'dataFromLS')
    var flag = false;
    for(var i = 0; i < dataFromLS.length; i++){
        if(dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword){
            flag = true;
        }
    }
    if(flag === true){
        alert("login succecfully")
    } else {
        dataFromLS.push(userData);
        localStorage.setItem("userData",JSON.stringify(dataFromLS));
        document.getElementById("email").value =" ";
        document.getElementById("password").value = " ";
        window.location.href = '/home.html';
        alert("Wrong cred, Please check your email and password");
    }
}

function forgetPassword(){
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));

    var userEmail = document.getElementById("email").value;
    var flag = false;
    for(var i=0; i<dataFromLS.length; i++){
        if(dataFromLS[i].email === userEmail){
            flag = true;
        }
    }
    if(flag === true){
        window.location.href = '/newPassword.html';
        alert("Now Set new password...")
    }else{
        alert("Your email not in our db, check email again...")
    }
}

function newPassword(){
    
}