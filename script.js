// Ajouter ce script à la fin du body de votre index.html
document.addEventListener('DOMContentLoaded', function() {
    // Créer le bouton hamburger s'il n'existe pas déjà
    const navbar = document.querySelector('.navbar');
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    
    if (!hamburgerMenu) {
        hamburgerMenu = document.createElement('div');
        hamburgerMenu.className = 'hamburger-menu';
        
        for (let i = 0; i < 3; i++) {
            const line = document.createElement('div');
            line.className = 'hamburger-line';
            hamburgerMenu.appendChild(line);
        }
        
        navbar.appendChild(hamburgerMenu);
    }
    
    // Gestionnaire d'événements pour le menu hamburger
    hamburgerMenu.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
    
    // Fermer le menu en cliquant sur un lien
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });
    
    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', function(event) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.hamburger-menu')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});