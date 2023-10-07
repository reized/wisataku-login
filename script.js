let toggle = document.getElementById("toggle");
let password = document.getElementById("password");

toggle.onclick = function(){
    if (password.type == "password") {
        password.type = "text";
        toggle.src = "assets/hide.png"
    } else {
        password.type = "password";
        toggle.src = "assets/show.png"
    }
}