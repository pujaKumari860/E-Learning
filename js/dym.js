import { courses } from "../data.js";

window.addEventListener("DOMContentLoaded", () => {
  const pageId = document.body.id;

  // ============ Slider Section for Home Page ============
  if (pageId === "home") {
    const sliderContainer = document.getElementById("courseSlider");

    courses.forEach((course) => {
      const courseDiv = document.createElement("div");
      courseDiv.className = "course-list-cont";
      courseDiv.style.background = `url(${course.images}) no-repeat center`;
      courseDiv.style.backgroundSize = "cover";

      courseDiv.innerHTML = `
        <a href="coursedetails.html?id=${course.id}">
          <div class="cour-list-top">${course.name}</div>
          <div class="cour-list-bott">
            <ul>
              <li>${course.skills}</li>
              <li>${course.jobs} Jobs</li>
              <li>Avg. ₹${course.salary}/yr</li>
            </ul>
          </div>
        </a>
      `;

      sliderContainer.appendChild(courseDiv);
    });
  }

  // ============ Filterable Cards Section for Course Page ============
  if (pageId === "course") {
    const cardContainer = document.getElementById("cardContainer");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function createCourseCard(course) {
      return `
        <div class="col-md-6 col-lg-4 col-xl-3 role-item" data-category="${course.category}">
          <a href="coursedetails.html?id=${course.id}">
            <div class="role-card">
              <img src="${course.images}" alt="${course.name}" />
              <div class="role-title">${course.name}</div>
              <p class="role-desc mb-2">${course.description}</p>
              <div class="skil-rol">If you like: ${course.skills}</div>
              <span><strong>₹${course.salary}</strong> Median Salary</span> 
              <span><strong>${course.jobs}</strong> Jobs Available</span>
            </div>
          </a>
        </div>`;
    }

    function renderCourses(filter) {
      cardContainer.innerHTML = "";

      const filteredCourses =
        filter === "all"
          ? courses
          : courses.filter((course) => course.category === filter);

      filteredCourses.forEach((course) => {
        cardContainer.innerHTML += createCourseCard(course);
      });
    }

    // Initial render
    renderCourses("all");

    // Filter buttons
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelector(".filter-btn.active")
          ?.classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        renderCourses(filter);
      });
    });
  }

  if (pageId === "coursedetail") {
    // Get course ID from URL like: coursedetails.html?id=2
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get("id"));
    const enrollNow = document.getElementById("enrollNow");

    // Find the course with the matching ID
    const selectedCourse = courses.find((course) => course.id === courseId);

    // save selected course in localstorage
    localStorage.setItem("selectedCourse", JSON.stringify(selectedCourse));

    // get selected course from localstorage
    const getSelectedCourse = JSON.parse(
      localStorage.getItem("selectedCourse")
    );

    // add event listener to enrollNow button
    enrollNow.addEventListener("click", () => {
      // update on lodal storage enrolled multiple items course
      const existingCourses =
        JSON.parse(localStorage.getItem("enrolledCourse")) || [];
      localStorage.setItem(
        "enrolledCourse",
        JSON.stringify([...existingCourses, getSelectedCourse])
      );
      window.location.href = "checkout.html";
    });

    if (getSelectedCourse) {
      // Update DOM elements with course data
      document.getElementById("courseName").textContent = selectedCourse.name;
      document.getElementById("courseImage").src = selectedCourse.images;
      document.getElementById(
        "coursePrice"
      ).innerHTML = `<span>At Just</span> ₹${selectedCourse.price}`;
      document.getElementById("course-des").textContent =
        selectedCourse.description;
      document.getElementById("log-description").textContent =
        selectedCourse.longDes;
      document.getElementById(
        "course-skill"
      ).innerHTML = `<strong>Skills you'll need:</strong> ${selectedCourse.skills}`;
    }
  }

  if (pageId === "checkout") {
    // get enrolled course from localstorage
    const getEnrolledCourse = JSON.parse(
      localStorage.getItem("enrolledCourse")
    );
    const checkoutCourse = document.getElementById("checkoutCourse");

    if (getEnrolledCourse && Array.isArray(getEnrolledCourse)) {
      const totalPrice = getEnrolledCourse.reduce(
        (sum, course) => sum + course.price,
        0
      );

      checkoutCourse.innerHTML = `
        <div class="final-cour-del" data-aos="fade-up" data-aos-duration="1000">
          ${getEnrolledCourse
            .map(
              (course) => `
            <div class="check-list-del">
              <img src="${course.images}" alt="${course.name}" class="img-fluid">
              <div>
                <p>${course.name}</p>
                <a href="#" onclick="removeEnrolledCourse(${course.id})">Remove from cart</a>
              </div>
            </div>
          `
            )
            .join("")}
          <div class="border-line"></div>
          <div class="cart-total">
            <p>Total:</p>
            <p>₹${totalPrice}</p>
          </div>
        </div>
      `;
    }

  }
});
