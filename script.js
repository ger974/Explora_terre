function scrollGallery(direction) {
                    const galerie = document.querySelectorAll('.galerie')[1];
                    galerie.scrollBy({ left: direction * 200, behavior: 'smooth' });}