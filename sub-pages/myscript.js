// navbar
let toggle = document.getElementById("toggle");
let navigation = document.querySelector(".navigation")
let ovrl = document.querySelector(".ovrl");
toggle.addEventListener("click", () => {
    navigation.classList.toggle("slider");
    ovrl.classList.toggle("overlay");

})
window.onscroll = function () {
    var header = document.getElementById
        ('header');
    let scroll = document.getElementById('scroll');
    if (window.scrollY > 50) {
        // Add background color when scrolled
        header.classList.add('scrolled');
        header.classList.remove('transparent');

        scroll.classList.add('scroll2');
        scroll.classList.remove('scroll1');
    } else {
        // Remove background color when at the top
        header.classList.remove('scrolled');
        header.classList.add('transparent');
        scroll.classList.add('scroll1');
        scroll.classList.remove('scroll2');
    }
};
// Absolute scroll
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Left scolling animation
const observerL = new IntersectionObserver((entries, observerL) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in class when the content is in view
            entry.target.classList.add('anime');
            // Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is in view
});

// Select all sections with scroll-content class and observe them
const scrollContentsL = document.querySelectorAll('.animl');
scrollContentsL.forEach(content => {
    observerL.observe(content); // Start observing each section

});

// Right scolling animation
// Create an IntersectionObserver to trigger animations
const observerR = new IntersectionObserver((entries, observerR) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add fade-in class when the content is in view
            entry.target.classList.add('anime');
            // Stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the element is in view
});

// Select all sections with scroll-content class and observe them
const scrollContentsR = document.querySelectorAll('.animr');
scrollContentsR.forEach(content => {
    observerR.observe(content); // Start observing each section

});

