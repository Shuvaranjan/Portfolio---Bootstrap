// header scroll
let nav = document.querySelector(".navbar");
let topBtn = document.querySelector(".top-btn");
window.onscroll = function () {

    if (document.documentElement.scrollTop > 25) {
        nav.classList.add("header-scrolled");

        // visible top-menu button
        if (document.documentElement.scrollTop > 300) {
            topBtn.style.display = "inline-block";
        }

        else {
            topBtn.style.display = "none";
        }
    }

    else {
        nav.classList.remove("header-scrolled");
    }

}

// close menu
let navbar = document.querySelectorAll(".nav-link");
let navMenu = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click", function(){
            navMenu.classList.remove("show");
    });
});

// Bootstrap Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// reset form
window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("contact").reset();
};