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

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        section.addEventListener("click", () => {
            let existingSummary = section.nextElementSibling;
            if (existingSummary && existingSummary.classList.contains("summary")) {
                existingSummary.remove();
            } else {
                document.querySelectorAll(".summary").forEach((s) => s.remove());

                const summary = document.createElement("div");
                summary.classList.add("summary");

                summary.innerHTML = `
                    <h3>Projects Overview</h3>
                    <p>Explore the featured projects with a gallery of images showcasing the work.</p>
                    <div class="carousel">
                        <div class="carousel-images">
                            <img src="images/no_image.jpg" alt="Project 1">
                            <img src="images/no_image.jpg" alt="Project 2">
                            <img src="images/no_image.jpg" alt="Project 3">
                        </div>
                        <button class="carousel-arrow left">&#8249;</button>
                        <button class="carousel-arrow right">&#8250;</button>
                        <div class="carousel-indicators">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                `;

                section.parentNode.insertBefore(summary, section.nextSibling);

                // Initialiser le carrousel
                initCarousel(summary.querySelector(".carousel"));
            }
        });
    });

    function initCarousel(carousel) {
        const imagesContainer = carousel.querySelector(".carousel-images");
        const images = carousel.querySelectorAll(".carousel-images img");
        const dots = carousel.querySelectorAll(".carousel-indicators .dot");
        const leftArrow = carousel.querySelector(".carousel-arrow.left");
        const rightArrow = carousel.querySelector(".carousel-arrow.right");

        let currentIndex = 0;
        const totalImages = images.length;

        function updateCarousel(index) {
            imagesContainer.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }

        function goToNext() {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel(currentIndex);
        }

        function goToPrev() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel(currentIndex);
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentIndex = i;
                updateCarousel(currentIndex);
            });
        });

        leftArrow.addEventListener("click", goToPrev);
        rightArrow.addEventListener("click", goToNext);

        // Défilement automatique toutes les 5 secondes
        setInterval(goToNext, 5000);

        updateCarousel(currentIndex);
    }
});


