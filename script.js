//console.log("Script chargé !");

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton et la sidebar
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const main_content = document.getElementById('main-content');
    
    // Ajouter un événement au clic sur le bouton
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-hidden'); // Ajoute ou enlève la classe pour masquer/afficher la sidebar
        main_content.classList.toggle('main-content-hidden');
    });
});

// Attente que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    const topBar = document.querySelector('.top-bar');
    const toggleSidebar = document.querySelector('.toggle-sidebar');
    const topnav = document.querySelector('.top-nav');

    // Ajout de l'écouteur d'événement pour le scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 5) {
            topBar.classList.add('scrolled'); // Applique la transparence
            toggleSidebar.classList.add('scrolled');
            topnav.classList.add('scrolled');
            console.log('okay')
        } else {
            topBar.classList.remove('scrolled'); // Retire la transparence quand on revient en haut
            toggleSidebar.classList.remove('scrolled');
            topnav.classList.remove('scrolled');
        }
    });
});

// Détection du clic sur une image du bandeau
document.querySelectorAll('.banner-image').forEach(image => {
    image.addEventListener('click', () => {
        const targetId = image.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sélection de toutes les sections
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        // Trouver le bloc de contenu associé
        const contentId = section.id + '-content';
        const content = document.getElementById(contentId);

        // Afficher ou masquer le contenu
        if (content.classList.contains('active')) {
            content.classList.remove('active');
        } else {
            // Masquer les autres contenus ouverts (optionnel)
            document.querySelectorAll('.section-content.active').forEach(activeContent => {
                activeContent.classList.remove('active');
            });

            content.classList.add('active');
        }
    });
});

// Sélectionne tous les carrousels
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    let currentIndex = 0;

    const images = carousel.querySelectorAll('.carousel-images img');
    const dots = carousel.querySelectorAll('.carousel-indicators .dot');
    const carouselImages = carousel.querySelector('.carousel-images');
    const leftArrow = carousel.querySelector('.carousel-arrow.left');
    const rightArrow = carousel.querySelector('.carousel-arrow.right');

    // Fonction pour afficher l'image active
    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Calcule la largeur de l'image visible
        const imageWidth = carousel.clientWidth;

        // Met à jour la position du carrousel
        carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

        // Met à jour les indicateurs
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Gérer les clics sur les flèches
    leftArrow.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    rightArrow.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    // Gérer les clics sur les indicateurs
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImage(index);
        });
    });

    // Mettre à jour la largeur du carrousel à chaque redimensionnement
    window.addEventListener('resize', () => {
        showImage(currentIndex); // Recalculer l'image actuelle après redimensionnement
    });

    // Initialiser le carrousel
    showImage(currentIndex);
});
