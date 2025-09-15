document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add("active");
    }
  });
});
