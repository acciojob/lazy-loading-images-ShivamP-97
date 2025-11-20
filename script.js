//your JS code here. If required.
function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('img.lazy');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;

        img.src = img.dataset.src;

        obs.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
}

document.addEventListener("DOMContentLoaded", lazyLoadImages);
