// JavaScript functionality for the landing page

// Function to get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    return now.toUTCString(); // Returning in UTC
}

// Function to display current date and time on the webpage
function displayDateTime() {
    const dateTimeContainer = document.getElementById('datetime');
    if (dateTimeContainer) {
        dateTimeContainer.innerHTML = getCurrentDateTime();
    }
}

// Call displayDateTime on page load
window.onload = displayDateTime;