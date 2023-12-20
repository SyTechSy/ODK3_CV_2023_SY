document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");
    pages[0].style.display = "block"; // Afficher la première page (Accueil) au chargement

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const index = parseInt(this.getAttribute("data-index")); // Récupérer l'index du lien cliqué
            pages.forEach((page, pageIndex) => {
                if (pageIndex === index) {
                    page.style.display = "block"; // Afficher la page correspondante
                    links.forEach(link => link.classList.remove("nav-active")); // Retirer la classe des autres liens
                    this.classList.add("nav-active"); // Ajouter la classe pour le lien actif
                } else {
                    page.style.display = "none"; // Masquer les autres pages
                }
            });
        });
    });
});


const nemuGlobalTimes = document.getElementById('menu_global_times');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        nemuGlobalTimes.classList.add('show_active');
        navToggle.style.display = 'none';
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        nemuGlobalTimes.classList.remove('show_active');
        navToggle.style.display = 'block'; 
    })
}



const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('menu_global_times')
    // Lorsque nous cliquons sur chaque nav__link, nous supprimons le show-menu
    navMenu.classList.remove('show_active')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// lien click qui va donnée le color

for (let link = 0; link < navLink.length; link++) {
   navLink[link].addEventListener('click',function() {
        for (let linkk = 0; linkk < navLink.length; linkk++) {
           navLink[linkk].classList.remove("nav-active");
            
        }
        this.classList.add("nav-active");
        navToggle.style.display = "block"
   });  
}




/* ================ CHANGE BACKGROUND HEADER ==================*/

const scrollHeader = () => {
    const header = document.getElementById('nav')
    // Lorsque le défilement est supérieur à 50 de hauteur de fenêtre, ajoutez la classe d'en-tête de défilement
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)