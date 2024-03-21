
import "./styles/style.scss";
import Swal from 'sweetalert2';
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const numeroDeCelular = document.getElementById('numeroDeCelular').value;
  const password = document.getElementById('password').value;
  const axios = require('axios');
  
  if (!numeroDeCelular || !password) {
    Swal.fire('Error', 'Por favor complete todos los campos.', 'error');
    return;
  }
  
  // Aquí puedes realizar la solicitud a la API para verificar el inicio de sesión
  // Por ejemplo:
  axios.get('https://apifakewhatsapp-dev-qsak.1.us-1.fl0.io/usuarios', {
    numeroDeCelular: numeroDeCelular,
    password: password
  })
  .then(function (response) {
    // Manejo de la respuesta exitosa
    Swal.fire('Bienvenido', 'Inicio de sesión exitoso', 'success');
    // Redirigir al usuario a la página home
    setTimeout(function() {
      window.location.href = '/home.html';
    }, 1500); // Redireccionar después de 1.5 segundos
  })
  .catch(function (error) {
    // Manejo de errores de la solicitud a la API
    Swal.fire('Error', 'Error al iniciar sesión. Por favor, inténtalo de nuevo.', 'error');
  });
});