document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Top Banner Rotation
    const topBanner = document.getElementById('topBanner');
    let currentBanner = 0;
    const bannerCount = topBanner.children.length;

    setInterval(() => {
        currentBanner = (currentBanner + 1) % bannerCount;
        topBanner.style.transform = `translateX(-${currentBanner * 100}%)`;
    }, 5000);

    // Hero Slider
    const heroSlider = document.getElementById('heroSlider');
    const heroImages = [
        'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    ];

    heroImages.forEach((image, index) => {
        const div = document.createElement('div');
        div.className = `absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        div.style.backgroundImage = `url('${image}')`;
        heroSlider.appendChild(div);
    });

    let currentHeroSlide = 0;
    setInterval(() => {
        const slides = heroSlider.children;
        slides[currentHeroSlide].classList.remove('opacity-100');
        slides[currentHeroSlide].classList.add('opacity-0');
        currentHeroSlide = (currentHeroSlide + 1) % slides.length;
        slides[currentHeroSlide].classList.remove('opacity-0');
        slides[currentHeroSlide].classList.add('opacity-100');
    }, 5000);

    // Services Slider
    const servicesSlider = document.getElementById('servicesSlider');
    const services = [
        { title: 'Detallado Completo', description: 'Restauramos el brillo original de su vehículo', image: 'https://example.com/detailing.jpg' },
        { title: 'Corrección de Pintura', description: 'Eliminamos imperfecciones y rayones', image: 'https://example.com/paint-correction.jpg' },
        { title: 'Encerado Cerámico', description: 'Protección duradera para su vehículo', image: 'https://example.com/ceramic-coating.jpg' },
        { title: 'Limpieza de Interiores', description: 'Dejamos su interior como nuevo', image: 'https://example.com/interior-cleaning.jpg' }
    ];

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card inline-block mr-4';
        serviceCard.innerHTML = `
            <img src="${service.image}" alt="${service.title}">
            <div class="service-card-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="#contact">Reservar</a>
            </div>
        `;
        servicesSlider.appendChild(serviceCard);
    });

    // Gallery
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryItems = [
        { image: 'https://example.com/gallery1.jpg', category: 'detailing' },
        { image: 'https://example.com/gallery2.jpg', category: 'paint' },
        { image: 'https://example.com/gallery3.jpg', category: 'ceramic' },
        { image: 'https://example.com/gallery4.jpg', category: 'detailing' },
        { image: 'https://example.com/gallery5.jpg', category: 'paint' },
        { image: 'https://example.com/gallery6.jpg', category: 'ceramic' }
    ];

    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.category}`;
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="Gallery Image">
            <div class="gallery-item-overlay">
                <a href="${item.image}" data-lightbox="gallery">Ver</a>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });

    // Gallery Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            const items = galleryGrid.children;

            for (let item of items) {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }

            filterButtons.forEach(btn => btn.classList.remove('bg-secondary', 'text-primary'));
            this.classList.add('bg-secondary', 'text-primary');
        });
    });

    // Instagram Reels
    const reelsSlider = document.getElementById('reelsSlider');
    const reels = [
        { image: 'https://example.com/reel1.jpg', title: 'Detallado en acción' },
        { image: 'https://example.com/reel2.jpg', title: 'Antes y después' },
        { image: 'https://example.com/reel3.jpg', title: 'Tips de cuidado' },
        { image: 'https://example.com/reel4.jpg', title: 'Nuestro equipo' }
    ];

    reels.forEach(reel => {
        const reelElement = document.createElement('div');
        reelElement.className = 'reel inline-block mr-4';
        reelElement.innerHTML = `
            <img src="${reel.image}" alt="${reel.title}">
            <div class="reel-overlay">
                <h3>${reel.title}</h3>
            </div>
        `;
        reelsSlider.appendChild(reelElement);
    });

    // Testimonials
    const testimonialSlider = document.getElementById('testimonialSlider');
    const testimonials = [
        { name: 'Juan Pérez', text: 'ED Auto Detailing transformó mi auto! Su atención al detalle es incomparable. Altamente recomendado!' },
        { name: 'María González', text: 'Estoy asombrada de cómo restauraron la pintura de mi auto viejo. ¡Se ve como nuevo! Gran servicio y personal amable.' },
        { name: 'Carlos Rodríguez', text: 'El encerado cerámico que aplicaron ha hecho que mantener el brillo de mi auto sea mucho más fácil. ¡Vale cada centavo!' }
    ];

    testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = `testimonial absolute inset-0 transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        testimonialElement.innerHTML = `
            <div class="bg-highlight bg-opacity-10 p-6 rounded-lg shadow-lg">
                <p class="mb-4 text-white">"${testimonial.text}"</p>
                <p class="text-sm text-accent">${testimonial.name}</p>
            </div>
        `;
        testimonialSlider.appendChild(testimonialElement);
    });

    let currentTestimonial = 0;
    setInterval(() => {
        const testimonials = testimonialSlider.children;
        testimonials[currentTestimonial].classList.remove('opacity-100');
        testimonials[currentTestimonial].classList.add('opacity-0');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.remove('opacity-0');
        testimonials[currentTestimonial].classList.add('opacity-100');
    }, 5000);

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AServicio: ${service}%0AMensaje: ${message}`;
        const whatsappUrl = `https://wa.me/19392709413?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
    });

    // Fade-in animation
    function fadeInElements() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', fadeInElements);
    window.addEventListener('load', fadeInElements);
});
