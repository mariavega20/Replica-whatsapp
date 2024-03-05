import "./styles/style.scss";
import image from './assets/images/logo.svg';

//Actualizar las imágenes en el atributo src de las etiquetas
const logoImage = document.getElementById("logo");

logoImage.setAttribute("src", image);

document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    function navigateTo(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                app.innerHTML = html;
            });
    }

    function handleNavigation(event) {
        event.preventDefault();
        const targetPage = event.target.getAttribute('href');
        navigateTo(targetPage);
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    navigateTo('index.html');
});