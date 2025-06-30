import { courses } from "../data.js";

window.addEventListener("DOMContentLoaded", () => {
  const pageId = document.body.id;

  // ============ Slider Section for Home Page ============
  if (pageId === "home") {
    const sliderContainer = document.getElementById("courseSlider");

    courses.forEach(course => {
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
        document.querySelector(".filter-btn.active")?.classList.remove("active");
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

  // Find the course with the matching ID
  const selectedCourse = courses.find(course => course.id === courseId);

  if (selectedCourse) {
    // Update DOM elements with course data
    document.getElementById("courseName").textContent = selectedCourse.name;
    document.getElementById("courseImage").src = selectedCourse.images;
    document.getElementById("coursePrice").innerHTML = `<span>At Just</span> ₹${selectedCourse.price}`;
    document.getElementById("course-des").textContent = selectedCourse.description;
    document.getElementById("log-description").textContent = selectedCourse.longDes;
    document.getElementById("course-skill").innerHTML = `<strong>Skills you'll need:</strong> ${selectedCourse.skills}`;
  }
}



});
