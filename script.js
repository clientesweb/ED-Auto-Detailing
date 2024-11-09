document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Initialize Swiper for hero section
    new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

    // Initialize Swiper for about section
    new Swiper('.about-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    // Top Banner Rotation
    const bannerContent = document.querySelector('#top-banner .banner-content');
    const bannerItems = document.querySelectorAll('#top-banner .banner-item');
    let currentBannerIndex = 0;

    function rotateBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % bannerItems.length;
        bannerContent.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
    }

    setInterval(rotateBanner, 5000); // Rotate every 5 seconds

    // Fix for top banner buttons
    const bannerButtons = document.querySelectorAll('#top-banner .banner-item a');
    bannerButtons.forEach(button => {
        button.style.color = '#8B0000'; // Set text color to primary color
        button.style.backgroundColor = 'white'; // Ensure background is white
    });

    // Service Modal
    const serviceModal = document.getElementById('serviceModal');
    const serviceButtons = document.querySelectorAll('.view-service');
    const serviceCloseBtn = serviceModal.querySelector('.close');

    serviceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const service = button.getAttribute('data-service');
            // Aquí normalmente obtendrías los detalles del servicio de una base de datos o API
            // Para este ejemplo, usaremos datos predefinidos
            const serviceDetails = {
                lavado: {
                    title: "Lavado y Encerado Premium",
                    description: "Nuestro servicio de lavado y encerado premium deja su vehículo reluciente y protegido contra los elementos.",
                    features: ["Lavado a mano detallado", "Encerado con productos premium", "Limpieza de rines y neumáticos", "Protección UV"],
                    price: "Desde $49.99"
                },
                interior: {
                    title: "Detallado Interior Profesional",
                    description: "Revitalice el interior de su vehículo con nuestro servicio de detallado completo.",
                    features: ["Aspirado profundo", "Limpieza de tapicería", "Desinfección completa", "Acondicionamiento de cuero"],
                    price: "Desde $89.99"
                },
                pintura: {
                    title: "Corrección de Pintura",
                    description: "Restauramos el brillo original de su vehículo eliminando rayones, remolinos y oxidación.",
                    features: ["Pulido profesional", "Eliminación de rayones", "Corrección de color", "Sellado protector"],
                    price: "Desde $199.99"
                },
                ceramica: {
                    title: "Protección Cerámica",
                    description: "Ofrecemos la última tecnología en protección de pintura con nuestro revestimiento cerámico.",
                    features: ["Preparación de superficie", "Aplicación de coating cerámico", "Protección duradera", "Brillo intenso"],
                    price: "Desde $299.99"
                }
            };

            const details = serviceDetails[service];
            document.getElementById('serviceTitle').textContent = details.title;
            document.getElementById('serviceDescription').textContent = details.description;
            document.getElementById('serviceFeatures').innerHTML = details.features.map(feature => `<li>${feature}</li>`).join('');
            document.getElementById('servicePrice').textContent = details.price;
            document.getElementById('serviceWhatsApp').href = `https://wa.me/19392709413?text=Hola, estoy interesado en el servicio de ${details.title}`;

            serviceModal.style.display = 'block';
        });
    });

    serviceCloseBtn.addEventListener('click', () => {
        serviceModal.style.display = 'none';
    });

    // Modern gallery filter
    const galleryFilter = () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        item.classList.add('fade-in');
                        setTimeout(() => item.classList.remove('fade-in'), 500);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    };

    galleryFilter();

    // Add fade-in animation class
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Gallery Modal
    const galleryModal = document.getElementById('galleryModal');
    const galleryCloseBtn = galleryModal.querySelector('.close');
    const viewWorkButtons = document.querySelectorAll('.view-work');

    viewWorkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const galleryItem = button.closest('.gallery-item');
            const images = JSON.parse(galleryItem.getAttribute('data-images'));
            const description = galleryItem.getAttribute('data-description');

            const gallerySwiper = new Swiper('.gallery-swiper', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            gallerySwiper.removeAllSlides();
            images.forEach(image => {
                gallerySwiper.appendSlide(`
                    <div class="swiper-slide">
                        <img src="${image}" alt="Gallery Image" class="w-full h-auto">
                    </div>
                `);
            });

            document.getElementById('galleryDescription').textContent = description;

            galleryModal.style.display = 'block';
        });
    });

    galleryCloseBtn.addEventListener('click', () => {
        galleryModal.style.display = 'none';
    });

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileMenuBtn = document.getElementById('closeMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
    });

    closeMobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission (you'll need to implement the actual form submission logic)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
        contactForm.reset();
    });

    // PWA installation
    let deferredPrompt;
    const installPWA = document.getElementById('installPWA');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installPWA.style.display = 'flex';
    });

    installPWA.addEventListener('click', (e) => {
        installPWA.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});