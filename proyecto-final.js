import { get_timeline,login } from "./proyecto-red-social.js";
const login_button = document.getElementById("login_button");
const timeline_container = document.getElementById("timeline");

//inputs
const username_input = document.getElementById('username');
const password_input = document.getElementById("password");


login_button.addEventListener('click',function(){
    const user = login(username_input.value.toLowerCase(),password_input.value.toLowerCase());
    timeline_container.innerHTML = "";
    if (user === undefined){
        alert("Usuario no encontrado en la base de datos");
        return;
    }
    const timeline = get_timeline(user);
    console.log(timeline)
    timeline[1].forEach((value)=>{
        timeline_container.innerHTML += `<div class='item'>${value}</div>`;
    })
})