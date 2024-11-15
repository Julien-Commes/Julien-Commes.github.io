console.log("Script chargé !");

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
        }
    });
});
