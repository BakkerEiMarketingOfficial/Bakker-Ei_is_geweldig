//Meer JS van Chat, voor de carrousel

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Functionality
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const header = document.querySelector('header');

  if (hamburgerMenu && header) {
    hamburgerMenu.addEventListener('click', () => {
      header.classList.toggle('menu-open');
    });
  }

  // Carousel Functionality
  const images = document.querySelector('.carousel-images');
  const prevButton = document.querySelector('.vorige');
  const nextButton = document.querySelector('.volgende');

  if (images && prevButton && nextButton) {
    // Clone the first and last images
    const firstClone = images.children[0].cloneNode(true);
    const lastClone = images.children[images.children.length - 1].cloneNode(true);

    // Add the clones to the carousel
    images.appendChild(firstClone);
    images.insertBefore(lastClone, images.firstChild);

    let currentIndex = 1; // Start at 1 to account for the cloned last image at the beginning
    const totalImages = images.children.length;

    function updateCarousel(smooth = true) {
      const width = images.children[0].clientWidth;
      images.style.transition = smooth ? 'transform 0.5s ease' : 'none';
      images.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    function moveToNextImage() {
      currentIndex++;
      updateCarousel();

      if (currentIndex === totalImages - 1) {
        setTimeout(() => {
          currentIndex = 1;
          updateCarousel(false);
        }, 500);
      }
    }

    function moveToPreviousImage() {
      currentIndex--;
      updateCarousel();

      if (currentIndex === 0) {
        setTimeout(() => {
          currentIndex = totalImages - 2;
          updateCarousel(false);
        }, 500);
      }
    }

    prevButton.addEventListener('click', moveToPreviousImage);
    nextButton.addEventListener('click', moveToNextImage);

    // Initial positioning
    updateCarousel(false);

    // Auto-slide
    setInterval(moveToNextImage, 10000);
  }
});

// Dit is een geh-ei-me pagine voor het interview (easter ei)
document.querySelector(".logo").addEventListener("click", function(event) {
  event.preventDefault(); // Voorkomt de standaard actie van de <a> tag
  if (event.ctrlKey && event.shiftKey) {
      window.location.href = "ons-super-ei.html"; // Geheime pagina
  } else {
      window.location.href = "index.html"; // Standaard homepage
  }
});
