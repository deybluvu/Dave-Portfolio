// NAVIGATION TOGGLE + SMOOTH SCROLL
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// BUTTON SCROLL FUNCTION
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// PROJECT HOVER DESCRIPTION
const projects = document.querySelectorAll(".project");
const desc = document.getElementById("project-desc");

projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    desc.textContent = project.getAttribute("data-desc");
  });

  project.addEventListener("mouseleave", () => {
    desc.textContent = "Hover on a project to see description";
  });
});