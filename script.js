document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init();

    // Top Banner Rotation
    const banner = document.getElementById('top-banner');
    const bannerContent = banner.querySelector('.banner-content');
    const bannerItems = banner.querySelectorAll('.banner-item');
    let currentBannerIndex = 0;

    function rotateBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % bannerItems.length;
        bannerContent.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
    }

    setInterval(rotateBanner, 5000);

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileMenuBtn = document.getElementById('closeMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    closeMobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobile

Menu.classList.add('hidden');
        });
    });

    // Initialize Swiper for Hero Section
    new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    // Initialize Swiper for About Section
    new Swiper('.about-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        effect: 'slide',
    });

    // Service Buttons Click Handlers
    const serviceButtons = document.querySelectorAll('.view-service');
    serviceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const service = button.getAttribute('data-service');
            // Here you would typically show more details about the service
            // For now, we'll just log to console
            console.log(`Showing details for ${service} service`);
        });
    });

    // Gallery filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Gallery Item Click Handler
    const galleryItemButtons = document.querySelectorAll('.view-work');
    galleryItemButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const galleryItem = button.closest('.gallery-item');
            const images = JSON.parse(galleryItem.getAttribute('data-images'));
            const description = galleryItem.getAttribute('data-description');
            
            // Here you would typically show a modal or lightbox with the images and description
            // For now, we'll just log to console
            console.log('Gallery Item Images:', images);
            console.log('Gallery Item Description:', description);
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Construct WhatsApp message
        const whatsappMessage = `Nuevo mensaje de contacto:%0A%0ANombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');

        // Reset form
        contactForm.reset();
    });

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Construct WhatsApp message for newsletter subscription
        const whatsappMessage = `Nueva suscripción al boletín:%0A%0AEmail: ${email}`;
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');

        // Reset form
        newsletterForm.reset();
    });

    // PWA Installation
    let deferredPrompt;
    const installPWAButton = document.getElementById('installPWA');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installPWAButton.classList.remove('hidden');
    });

    installPWAButton.addEventListener('click', (e) => {
        installPWAButton.classList.add('hidden');
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});