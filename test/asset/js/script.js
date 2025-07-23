  document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.querySelector(".hot-arrow");
    const carousel = document.querySelector(".deals-carousel");

    nextBtn.addEventListener("click", function () {
      carousel.scrollBy({
        left: 220, 
        behavior: "smooth"
      });
    });
  });


  const carouselProduct = document.querySelector('.carousel-product');
  let scrollStep = 300; // Change this based on card height
  let scrollDelay = 5000; // 5 seconds

  setInterval(() => {
    if (carouselProduct) {
      const maxScroll = carouselProduct.scrollHeight - carouselProduct.clientHeight;
      if (carouselProduct.scrollTop + scrollStep >= maxScroll) {
        // 🔁 Scroll back to top when reaching end
        carouselProduct.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // ⬇ Scroll down by step
        carouselProduct.scrollBy({ top: scrollStep, behavior: 'smooth' });
      }
    }
  }, scrollDelay);





document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".deals-carousel");
  const nextBtn = document.querySelector(".hot-arrow");

  // Scroll amount equals the width of one card + gap
  const scrollStep = () => {
    const card = carousel.querySelector(".deal");
    return card.offsetWidth + 16; // 16px is the gap
  };

  nextBtn.addEventListener("click", () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const currentScroll = carousel.scrollLeft;
    const nextScroll = currentScroll + scrollStep();

    if (nextScroll >= maxScroll) {
      // Restart from beginning
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: scrollStep(), behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;

  const cartCounter = document.querySelector(".cart-count");

  // All "+ Add to cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-cart-btn");

  // All plus icons in Latest Arrivals or Suggestions
  const plusButtons = document.querySelectorAll(".fa-plus");

  function updateCartCount() {
    cartCount++;
    cartCounter.textContent = cartCount;
    cartCounter.classList.add("d-inline");
  }

  // Bind to button elements
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", updateCartCount);
  });

  // Bind to icon buttons
  plusButtons.forEach((icon) => {
    icon.closest("button").addEventListener("click", updateCartCount);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let wishlistCount = 0;
  const wishlistCounter = document.querySelector(".wishlist-count");

  // All heart icons (wishlist buttons)
  const heartIcons = document.querySelectorAll(".fa-heart, .fa-regular.fa-heart");

  function updateWishlistCount(event) {
    wishlistCount++;
    wishlistCounter.textContent = wishlistCount;
    wishlistCounter.classList.add("d-inline");

    // Optional: visual feedback
    const icon = event.currentTarget.querySelector("i");
    if (icon) {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    }
  }

  // Attach listener to parent button of icons
  heartIcons.forEach((icon) => {
    const button = icon.closest("button");
    if (button) {
      button.addEventListener("click", updateWishlistCount);
    }
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const originalImages = Array.from(slider?.getElementsByClassName("static-image") || []);
  let currentIndex = 0;

  function updateActiveImage() {
    const reordered = [
      ...originalImages.slice(currentIndex + 1),
      ...originalImages.slice(0, currentIndex + 1)
    ];

    slider.innerHTML = "";

    reordered.forEach((img, idx) => {
      const clone = img.cloneNode(true);
      clone.classList.remove("active", "size-1", "size-2", "size-3");

      const positionFromEnd = reordered.length - 1 - idx;

      if (positionFromEnd === 0) {
        clone.classList.add("active");
      } else if (positionFromEnd === 3) {
        clone.classList.add("size-3");
      } else if (positionFromEnd === 2) {
        clone.classList.add("size-2");
      } else if (positionFromEnd === 1) {
        clone.classList.add("size-1");
      }

      slider.appendChild(clone);
    });
  }

  function shiftSlider(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = originalImages.length - 1;
    else if (currentIndex >= originalImages.length) currentIndex = 0;
    updateActiveImage();
  }

  // 👇 Move these listeners out of the nested DOMContentLoaded
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  prevBtn?.addEventListener("click", () => shiftSlider(-1));
  nextBtn?.addEventListener("click", () => shiftSlider(1));

  updateActiveImage(); // Initial call
});

