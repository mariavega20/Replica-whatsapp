import "../styles/style.scss";
import Swal from "sweetalert2";

document.getElementById("registro").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const numeroDeCelular = document.getElementById("numeroDeCelular").value;
    const password = document.getElementById("password").value;
    const fotoDePerfil = document.getElementById("fotoDePerfil").value;
    const info = document.getElementById("info").value;



    const axios = require("axios");

    if (!nombre || !numeroDeCelular || !password || !fotoDePerfil || !info) {
        Swal.fire("Error", "Por favor complete todos los campos.", "error");
        return;
    }

    
    axios.post('https://apifakewhatsapp-dev-qsak.1.us-1.fl0.io/usuarios', {
        nombre: nombre,
        numeroDeCelular: numeroDeCelular,
        password: password,
        fotoDePerfil: fotoDePerfil,
        info: info,
        })
        .then(function (response) {
        if (
            response.data.error === "Este número de telefono ya está registrado"
        ) {
            alert("El número de celular ingresado ya está registrado.");
        } else if (response.data.success) {
          // Manejo de la respuesta exitosa
            Swal.fire({
            title: "Registrado!",
            text: "Tu registro fue exitoso, ya puedes iniciar sesión",
            icon: "success",
            });
          // Redirigir al usuario a la página home
            setTimeout(function () {
            window.location.href = "/index.html";
          }, 1500); // Redireccionar después de 1.5 segundos
        }
        })
        .catch(function (error) {
        Swal.fire({
            icon: "error",
            title: "Registro fallido...",
            text: "Por favor intenta nuevamente!",
        });
        });
    });
