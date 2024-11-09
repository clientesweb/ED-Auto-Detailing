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

    // Initialize Swiper for services section
    new Swiper('.services-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Initialize Swiper for testimonials section
    new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Initialize Swiper for Instagram Reels section
    new Swiper('.reels-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Service Modal
    const serviceModal = document.getElementById('serviceModal');
    const serviceButtons = document.querySelectorAll('.view-service');
    const closeServiceModal = document.getElementById('closeServiceModal');

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

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const service = button.getAttribute('data-service');
            const details = serviceDetails[service];
            document.getElementById('serviceTitle').textContent = details.title;
            document.getElementById('serviceDescription').textContent = details.description;
            document.getElementById('serviceFeatures').innerHTML = details.features.map(feature => `<li>${feature}</li>`).join('');
            document.getElementById('servicePrice').textContent = details.price;
            document.getElementById('serviceWhatsApp').href = `https://wa.me/19392709413?text=Hola, estoy interesado en el servicio de ${details.title}`;
            serviceModal.classList.remove('hidden');
        });
    });

    closeServiceModal.addEventListener('click', () => {
        serviceModal.classList.add('hidden');
    });

    // Gallery filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Gallery Modal
    const galleryModal = document.getElementById('galleryModal');
    const closeGalleryModal = document.getElementById('closeGalleryModal');
    const viewWorkButtons = document.querySelectorAll('.view-work');

    viewWorkButtons.forEach(button => {
        button.addEventListener('click', () => {
            const galleryItem = button.closest('.gallery-item');
            const image = galleryItem.querySelector('img');
            const category = galleryItem.getAttribute('data-category');

            const gallerySwiper = new Swiper('.gallery-swiper', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            gallerySwiper.removeAllSlides();
            gallerySwiper.appendSlide(`
                <div class="swiper-slide">
                    <img src="${image.src}" alt="${image.alt}" class="w-full h-auto">
                </div>
            `);

            document.getElementById('galleryDescription').textContent = `Categoría: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

            galleryModal.classList.remove('hidden');
        });
    });

    closeGalleryModal.addEventListener('click', () => {
        galleryModal.classList.add('hidden');
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

    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
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

    // PWA Install Button
    let deferredPrompt;
    const installPWA = document.getElementById('installPWA');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installPWA.classList.remove('hidden');
    });

    installPWA.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        }
        installPWA.classList.add('hidden');
    });
});