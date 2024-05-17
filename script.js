// linking all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Adding event listeners to each navigation link
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Change text color when cursor enters the link
        link.style.color = '#4f7a1e'; //color changes to green
    });

    link.addEventListener('mouseleave', () => {
        // Change text color back when cursor leaves the link
        link.style.color = ''; // Empty string restores the default color
    });
});

//color code for mint green: #98FF98
//color code for blush pink: #FFC0CB


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

