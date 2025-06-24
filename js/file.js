

const homePage = document.body.id;
const header = document.querySelector(".headerPage");

if (!header) {
  console.warn("Header container not found.");
} else {
  if (homePage === 'home') {
    header.innerHTML = getHomeHeader();
  } else {
    header.innerHTML = getDefaultHeader();
  }
}

// Define different headers
function getHomeHeader() {
  return `
    <header class="sticky-top" id="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src="images/main-logo.png" alt="brand-logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="courses.html">Courses</a></li>
              <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
              <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="nav-button">
            <a href="sign-up.html" class="light-bttn">Sign Up</a>
            <a href="login.html" class="main-bttn">Login</a>
          </div>
        </div>
      </nav>
    </header>
  `;
}

function getDefaultHeader() {
  return `
   <header class="sticky-top" id="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
              <img src="images/footer-logo.png" width="140" height="auto" alt="brand-logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link text-dark" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link text-dark" href="courses.html">Courses</a></li>
              <li class="nav-item"><a class="nav-link text-dark" href="about.html">About Us</a></li>
              <li class="nav-item"><a class="nav-link text-dark" href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="nav-button">
            <a href="sign-up.html" class="dark-bttn">Sign Up</a>
            <a href="login.html" class="main-bttn">Login</a>
          </div>
        </div>
      </nav>
    </header>
  `;
}




const footerElements = document.getElementsByClassName('footerPage');

Array.from(footerElements).forEach(footer => {
  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- Company Info Section -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="footer-logo">
              <img src="images/footer-logo.png" alt="brand logo" />
            </div>
            <div class="footer-content">
              <p>
                <strong>Corporate Head Office:</strong> 3787 Jerry Dove Drive,
                Florence, South Carolina, 29501, United States.
              </p>
              <p><strong>Phone:</strong> 843-496-7759</p>
              <p><strong>Fax:</strong> 02-222284263</p>
              <p><strong>Email:</strong> info@masterstub.com</p>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="col-lg-2 col-md-6 col-sm-6 mb-4">
            <div class="footer-section">
              <h6>Quick Link</h6>
              <ul class="footer-links">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Our Course</a></li>
                <li><a href="#">Our Testimonials</a></li>
                <li><a href="#">Our FAQs</a></li>
              </ul>
            </div>
          </div>

          <!-- Others Section -->
          <div class="col-lg-2 col-md-6 col-sm-6 mb-4">
            <div class="footer-section">
              <h6>Others</h6>
              <ul class="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms And Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <!-- Top Courses Section -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="footer-section">
              <h6>Top Courses</h6>
              <ul class="footer-links">
                <li><a href="#">The Web Developer Bootcamp</a></li>
                <li><a href="#">Web Programming with Python and JavaScript</a></li>
                <li><a href="#">Full-Stack Web Development with React</a></li>
                <li><a href="#">Google UX Design Certificate</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-between">
          <div class="footer-bottom copyright">
            <p class="mb-0">
              © <script>document.write(new Date().getFullYear());</script> Evolve. All rights reserved.
            </p>
          </div>

          <!-- Social Media Section -->
          <div class="social-icons">
            <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `;
});