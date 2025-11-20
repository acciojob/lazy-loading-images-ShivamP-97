function lazyLoadImages() {
  const images = document.querySelectorAll("img.lazy");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const img = entry.target;

        img.src = img.dataset.src;

        img.onload = () => {
          img.setAttribute("data-loaded", "true");
        };

        obs.unobserve(img);
      });
    },
    {
      root: null,
      rootMargin: "300px",
      threshold: 0.01
    }
  );

  images.forEach(img => observer.observe(img));
}

document.addEventListener("DOMContentLoaded", lazyLoadImages);
