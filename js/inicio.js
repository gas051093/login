const btn_log = document.getElementById("salir");

btn_log.addEventListener("click", ()=>{
        sessionStorage.removeItem("log");
        window.location.href= "/index.html";
})