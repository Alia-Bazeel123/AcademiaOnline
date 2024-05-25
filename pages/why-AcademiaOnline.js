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

// Function to animate numbers
function animateValue(id, start, end, duration) {
    let current = start;
    const increment = Math.floor((end - start) / duration);
    const element = document.getElementById(id);
    const timer = setInterval(() => {
        current += increment;
        // Update the text content with current value and add "+" sign if current value reaches or exceeds the end value
        element.textContent = current.toLocaleString() + (current >= end ? "+" : "");
        if (current >= end) {
            clearInterval(timer); // Stop the timer when end value is reached
            element.textContent = end.toLocaleString() + "+"; // Ensure end value with "+" is displayed accurately
        }
    }, 1); // Interval for updating value (faster speed)
}

// Animate total students
animateValue('totalStudents', 0, 10000, 1500); // Start from 0, end at 10,000, duration of 1.5 seconds

// Animate training hours
animateValue('trainingHours', 0, 50000, 1500); // Start from 0, end at 50,000, duration of 1.5 seconds

