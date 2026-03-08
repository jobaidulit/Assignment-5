function login(){

const user=document.getElementById("username").value
const pass=document.getElementById("password").value

if(user==="admin" && pass==="admin123"){

localStorage.setItem("login",true)
window.location="index.html"

}else{

alert("Invalid credentials")

}

}
// go to login

 function login(){

 const user = document.getElementById("username").value
 const pass = document.getElementById("password").value

 if(user === "admin" && pass === "admin123"){

 window.location.href = "dashboard.html"

 }else{

 alert("Wrong credentials")

}

 }