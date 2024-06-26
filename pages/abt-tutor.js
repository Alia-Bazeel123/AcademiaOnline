// Pin header while scrolling
// Get the header element
const header = document.querySelector('header');

// Get the initial position of the header
const headerOffsetTop = header.offsetTop;

// Function to update the header position
function updateHeaderPosition() {
    if (window.pageYOffset > headerOffsetTop) {
        // If scrolled down, add the fixed-header class
        header.classList.add('fixed-header');
    } else {
        // If at the top, remove the fixed-header class
        header.classList.remove('fixed-header');
    }
}

// Listen for scroll events and call the updateHeaderPosition function
window.addEventListener('scroll', updateHeaderPosition);


