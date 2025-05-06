const login = document.getElementById('login');
login.addEventListener("submit", function (event) { 
    event.preventDefault();
    const user = document.getElementById("in_user");
    const pass = document.getElementById("in_pass");
    if (user.value === "admin" && pass.value === "123") {
        window.location.href = "/inicio.html";
        sessionStorage.setItem('log', 'true')
    } 
    if(user.value != "admin"){ 
        user.classList.add("is-invalid");
    }
    if (pass.value != "123"){
      pass.classList.add("is-invalid");
    }
})
