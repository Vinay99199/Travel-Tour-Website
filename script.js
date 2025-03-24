  // script.js - Full Enhanced Responsive JS
document.addEventListener("DOMContentLoaded", function () {
    // -------- NAVIGATION DROPDOWN TOGGLE -------- //
    const navDropdowns = document.querySelectorAll(".nav .dropdown");
  
    navDropdowns.forEach(drop => {
      const link = drop.querySelector("a");
      const menu = drop.querySelector(".dropdown-menu");
  
      link.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Close all other dropdowns
        document.querySelectorAll(".nav .dropdown-menu").forEach(m => {
          if (m !== menu) m.classList.remove("active");
        });
  
        // Toggle current dropdown
        menu.classList.toggle("active");
  
        // Optional icon rotate effect
        navDropdowns.forEach(d => d.classList.remove("rotate-arrow"));
        if (menu.classList.contains("active")) {
          drop.classList.add("rotate-arrow");
        }
      });
    });
  
    // -------- CLOSE NAV DROPDOWN ON OUTSIDE CLICK -------- //
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav .dropdown")) {
        document.querySelectorAll(".nav .dropdown-menu").forEach(menu => menu.classList.remove("active"));
        navDropdowns.forEach(drop => drop.classList.remove("rotate-arrow"));
      }
    });
  
    // -------- CLOSE NAV DROPDOWN ON ESCAPE KEY -------- //
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".nav .dropdown-menu").forEach(menu => menu.classList.remove("active"));
        navDropdowns.forEach(drop => drop.classList.remove("rotate-arrow"));
      }
    });
  
    // -------- SMOOTH SCROLL TO TOP -------- //
    const scrollToTopButtons = document.querySelectorAll(".scroll-to-top, .tour-card");
    scrollToTopButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  
    // -------- RESPONSIVE NAVIGATION TOGGLE BUTTON -------- //
    const navToggleBtn = document.createElement("button");
    navToggleBtn.className = "nav-toggle";
    navToggleBtn.setAttribute("aria-label", "Toggle Navigation");
    navToggleBtn.innerHTML = "<i class='fas fa-bars'></i>";
    document.querySelector(".main-header").appendChild(navToggleBtn);
  
    navToggleBtn.addEventListener("click", () => {
      const navList = document.querySelector(".nav-list");
      navList.classList.toggle("show-nav");
  
      // Toggle icon animation
      navToggleBtn.classList.toggle("active-icon");
    });
  
    // -------- FILTER BUTTON DROPDOWN TOGGLE -------- //
    const filterDropdownButtons = document.querySelectorAll(".filters .dropdown .filter-btn");
  
    filterDropdownButtons.forEach(btn => {
      const dropdownContent = btn.nextElementSibling;
  
      btn.addEventListener("click", (e) => {
        e.preventDefault();
  
        // Close other filter dropdowns
        document.querySelectorAll(".filters .dropdown-content").forEach(content => {
          if (content !== dropdownContent) content.classList.remove("active");
        });
  
        // Toggle current filter dropdown
        dropdownContent.classList.toggle("active");
      });
    });
  
    // -------- CLOSE FILTER DROPDOWNS ON OUTSIDE CLICK -------- //
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".filters .dropdown")) {
        document.querySelectorAll(".filters .dropdown-content").forEach(dc => dc.classList.remove("active"));
      }
    });
  
    // -------- CLOSE DROPDOWNS ON SCROLL -------- //
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".nav .dropdown-menu").forEach(menu => menu.classList.remove("active"));
      document.querySelectorAll(".filters .dropdown-content").forEach(dc => dc.classList.remove("active"));
      navDropdowns.forEach(drop => drop.classList.remove("rotate-arrow"));
    });
  });
  