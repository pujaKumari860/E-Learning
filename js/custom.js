window.addEventListener("scroll", function () {
  const navbar = this.document.getElementById("header");
  const triggerHeight = this.window.innerHeight;

  if (this.window.scrollY > triggerHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
$(".multiple-item").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
window.addEventListener("load", function () {
  const loader = this.document.getElementById("loader");
  if (loader) {
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";
    this.setTimeout(() => {
      loader.remove();
    }, 500);
  }
});

// for home page course slider
$(".course-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: $(".custom-arrows .course-prev"),
  nextArrow: $(".custom-arrows .course-next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false, // Disable arrows on smaller screens
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

// Handle arrow rotation based on collapse state
document.addEventListener("DOMContentLoaded", function () {
  const collapseElements = document.querySelectorAll(".collapse");

  collapseElements.forEach((collapse) => {
    const toggleButton = document.querySelector(
      `[data-bs-target="#${collapse.id}"]`
    );

    collapse.addEventListener("show.bs.collapse", function () {
      toggleButton.setAttribute("aria-expanded", "true");
    });

    collapse.addEventListener("hide.bs.collapse", function () {
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
});


// testimonial slider

// for home page course slider
$(".testimonial-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $(".testimonial-arrows .testimonial-prev"),
  nextArrow: $(".testimonial-arrows .testimonial-next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false, // Disable arrows on smaller screens
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// filter top course tab
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".role-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});