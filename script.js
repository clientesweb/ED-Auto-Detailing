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
        { id: 'reel1', title: 'Detallado en acción' },
        { id: 'reel2', title: 'Antes y después' },
        { id: 'reel3', title: 'Tips de cuidado' },
        { id: 'reel4', title: 'Nuestro equipo' }
    ];

    reels.forEach(reel => {
        const reelElement = document.createElement('div');
        reelElement.className = 'reel inline-block mr-4';
        reelElement.innerHTML = `
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/${reel.id}/" data-instgrm-version="14">
                <div style="padding:16px;">
                    <a href="https://www.instagram.com/reel/${reel.id}/" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                        <div style="display: flex; flex-direction: row; align-items: center;">
                            <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                            <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                                <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                                <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                            </div>
                        </div>
                        <div style="padding: 19% 0;"></div>
                        <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                        <g>
                                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div style="padding-top: 8px;">
                            <div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver este reel en Instagram</div>
                        </div>
                        <div style="padding: 12.5% 0;"></div>
                        <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                            <div>
                                <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div>
                                <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div>
                                <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div>
                            </div>
                            <div style="margin-left: 8px;">
                                <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div>
                                <div style="width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div>
                            </div>
                            <div style="margin-left: auto;">
                                <div style="width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div>
                                <div style="background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div>
                                <div style="width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;">
                            <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div>
                            <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div>
                        </div>
                    </a>
                </div>
            </blockquote>
            <div class="reel-overlay">
                <h3>${reel.title}</h3>
            </div>
        `;
        reelsSlider.appendChild(reelElement);
    });

    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);

    // Testimonials Slider
    const testimonialSlider = document.getElementById('testimonialSlider');
    const testimonials = [
        { name: 'Juan Pérez', text: 'Excelente servicio, mi auto quedó como nuevo.', rating: 5 },
        { name: 'María González', text: 'Profesionales y detallistas. Altamente recomendados.', rating: 5 },
        { name: 'Carlos Rodríguez', text: 'La mejor inversión para mi vehículo. Gracias ED Auto Detailing.', rating: 5 }
    ];

    testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = `testimonial absolute inset-0 transition-opacity duration-500 ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        testimonialElement.innerHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <p class="mb-4 text-gray-700">"${testimonial.text}"</p>
                <div class="flex items-center">
                    <div class="text-yellow-400">
                        ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                    </div>
                    <p class="ml-2 font-semibold">${testimonial.name}</p>
                </div>
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

    // Form submission to WhatsApp
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AServicio: ${service}%0AMensaje: ${message}`;
        const whatsappUrl = `https://wa.me/19392709413?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
    });
});