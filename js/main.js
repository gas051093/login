const login = document.getElementById('login'); // guardamos el form en login

async function call_users() {
    try{
    const response = await fetch('./users.json');
    const data = await response.json()
    return data;
    } catch(error){
        console.log(`error: ${error}`);
    }
}







login.addEventListener("submit", async function (event) { 
    event.preventDefault();
        const users = await call_users();
        const user_name = document.getElementById("in_user").value;
        const user_pass = document.getElementById("in_pass").value;

        const find_user = users.find(u => u.user === user_name && u.pass === user_pass);
        if(find_user){
            window.location.href = '/inicio.html';
            sessionStorage.setItem('log', 'true')  
        } else {
            Toastify({

                text: "error de datos",
                
                duration: 3000
                
                }).showToast();
        }
})
