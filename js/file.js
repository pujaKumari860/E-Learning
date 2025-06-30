

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

<div class="sign-modal modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
       <h1 class="modal-title fs-2" id="exampleModalLabel">Sign Up</h1>
       <p>Learn on your own time from top universities and businesses.</p>

       <form class="text-start mt-5 sign-form">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name<span>*</span></label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email<span>*</span></label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password<span>*</span></label>
          <div id="passwordHelpBlock" class="form-text">
            between 8 and 27 Characters
            </div>
            <div class="input-group">
          <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Create password">
          <span class="input-group-text"><i class="bi bi-eye-slash"></i></span>
          </div>
    
        
        </div>
       <div class="sing-bttn mt-5">
         <button type="button" class="login-bttn" data-bs-dismiss="modal">Join Now</button>
         <div class="another-opt">OR</div>
          <button type="button" class="login-opt-bttn disable" data-bs-dismiss="modal"><span><i class="bi bi-google"></i></span>Continue with Google</button>
       </div>
       <div class="another-page text-center my-4">Already on Evolev?<a href="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Log in</a></div>
       </form>
      </div>
      
    </div>
  </div>
</div>

<div class="sign-modal modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <h1 class="modal-title fs-2" id="exampleModalLabel">Welcome back</h1>

         <form class="text-start mt-5 sign-form">
       
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email<span>*</span></label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password<span>*</span></label>
          <div id="passwordHelpBlock" class="form-text">
            between 8 and 27 Characters
            </div>
            <div class="input-group">
          <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Create password">
          <span class="input-group-text"><i class="bi bi-eye-slash"></i></span>
          </div>
    
        <div class="another-page my-4"><a>Forgot Password?</a></div>
        </div>
       <div class="sing-bttn mt-5">
         <button type="button" class="login-bttn" data-bs-dismiss="modal">Login</button>
         <div class="another-opt">OR</div>
          <button type="button" class="login-opt-bttn disable" data-bs-dismiss="modal"><span><i class="bi bi-google"></i></span>Continue with Google</button>
       </div>
       <div class="another-page text-center my-4">New To Evolev?<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal" >Sign Up</a></div>
       </form>
      </div>
  
    </div>
  </div>
</div>

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
            <a href="" class="light-bttn" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</a>
            <a href="" class="main-bttn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Login</a>
          </div>
        </div>
      </nav>
    </header>
  `;
}

function getDefaultHeader() {
  return `

  <div class="sign-modal modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
       <h1 class="modal-title fs-2" id="exampleModalLabel">Sign Up</h1>
       <p>Learn on your own time from top universities and businesses.</p>

       <form class="text-start mt-5 sign-form">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name<span>*</span></label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email<span>*</span></label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password<span>*</span></label>
          <div id="passwordHelpBlock" class="form-text">
            between 8 and 27 Characters
            </div>
            <div class="input-group">
          <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Create password">
          <span class="input-group-text"><i class="bi bi-eye-slash"></i></span>
          </div>
    
        
        </div>
       <div class="sing-bttn mt-5">
         <button type="button" class="login-bttn" data-bs-dismiss="modal">Join Now</button>
         <div class="another-opt">OR</div>
          <button type="button" class="login-opt-bttn disable" data-bs-dismiss="modal"><span><i class="bi bi-google"></i></span>Continue with Google</button>
       </div>
       <div class="another-page text-center my-4">Already on Evolev?<a href="" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> Log in</a></div>
       </form>
      </div>
      
    </div>
  </div>
</div>

<div class="sign-modal modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <h1 class="modal-title fs-2" id="exampleModalLabel">Welcome back</h1>

         <form class="text-start mt-5 sign-form">
       
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email<span>*</span></label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password<span>*</span></label>
          <div id="passwordHelpBlock" class="form-text">
            between 8 and 27 Characters
            </div>
            <div class="input-group">
          <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Create password">
          <span class="input-group-text"><i class="bi bi-eye-slash"></i></span>
          </div>
    
        <div class="another-page my-4"><a>Forgot Password?</a></div>
        </div>
       <div class="sing-bttn mt-5">
         <button type="button" class="login-bttn" data-bs-dismiss="modal">Login</button>
         <div class="another-opt">OR</div>
          <button type="button" class="login-opt-bttn disable" data-bs-dismiss="modal"><span><i class="bi bi-google"></i></span>Continue with Google</button>
       </div>
       <div class="another-page text-center my-4">New To Evolev?<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"> Sign Up</a></div>
       </form>
      </div>
  
    </div>
  </div>
</div>


   <header class="sticky-top" id="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
              <img src="images/footer-logo.png" width="140" height="auto" alt="brand-logo" />
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link defalt-nav-link" href="index.html">Home</a></li>
              <li class="nav-item"><a class="nav-link defalt-nav-link" href="courses.html">Courses</a></li>
              <li class="nav-item"><a class="nav-link defalt-nav-link" href="about.html">About Us</a></li>
              <li class="nav-item"><a class="nav-link defalt-nav-link" href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="nav-button">
            <a href="" class="dark-bttn" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</a>
            <a href="" class="main-bttn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Login</a>
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
          <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000">
            <div class="footer-logo">
              <img src="images/footer-logo.png" alt="brand logo" />
            </div>
            <div class="footer-content">
              <p>
                <strong>Corporate Head Office:</strong> 3787 Jerry Dove Drive,
                Florence, South Carolina, 29501, United States.
              </p>
              <p class="mt-4"><strong>Phone:</strong> 843-496-7759</p>
              <p><strong>Fax:</strong> 02-222284263</p>
              <p><strong>Email:</strong> info@masterstub.com</p>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="col-lg-2 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1000">
            <div class="footer-section">
              <h6>Quick Link</h6>
              <ul class="footer-links">
                <li><a href="#">Pricing</a></li>
                <li><a href="courses.html">Our Course</a></li>
                <li><a href="index.html">Our Testimonials</a></li>
                <li><a href="index.html">Our FAQs</a></li>
              </ul>
            </div>
          </div>

          <!-- Others Section -->
          <div class="col-lg-2 col-md-6 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1000">
            <div class="footer-section">
              <h6>Others</h6>
              <ul class="footer-links">
                <li><a href="about.html">About Us</a></li>
                <li><a href="terms.html">Terms And Conditions</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <!-- Top Courses Section -->
          <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1000">
            <div class="footer-section">
              <h6>Top Courses</h6>
              <ul class="footer-links">
                <li><a href="courses.html">The Web Developer Bootcamp</a></li>
                <li><a href="courses.html">Web Programming with Python and JavaScript</a></li>
                <li><a href="courses.html">Full-Stack Web Development with React</a></li>
                <li><a href="courses.html">Google UX Design Certificate</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-between" >
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