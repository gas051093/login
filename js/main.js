
const login = document.getElementById('login');
login.addEventListener("submit", function (event) { 
    event.preventDefault();
    const user = document.getElementById("in_user").value;
    const pass = document.getElementById("in_pass").value;
    
    if (user === "" || pass === "") {
        Swal.fire({
          position: "top",
          icon: "warning",
          title: "Revise los datos",
          showConfirmButton: false,
          timer: 3000,
        });
     } else if (user === "admin" && pass === "123") {
        Swal.fire(`Bienvenido ${user}`);
        login.reset();
    } else { 
        Swal.fire({
          position: "top",
          icon: "error",
          title: "intente nuevamente",
          showConfirmButton: false,
          timer: 3000,
        });
        login.reset();
    }
})
