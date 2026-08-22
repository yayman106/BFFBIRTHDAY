// 1. Password Verification
function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const secretWord = "MARCY"; // Your password

    if (passwordInput === secretWord) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

// 2. Count-Up Timer Starting from May 25, 2025 at 23:33
const startDate = new Date("2025-05-25T23:33:00"); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();
// Story Book Page Navigation Logic
let currentPage = 1;
const totalPages = 4; // Change this number if you add more chapters!

function changePage(direction) {
    // Hide current page
    document.getElementById(`page-${currentPage}`).classList.remove('active-page');
    
    // Update page index
    currentPage += direction;

    // Show new page
    document.getElementById(`page-${currentPage}`).classList.add('active-page');

    // Update buttons & page text
    document.getElementById('pageIndicator').innerText = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prevBtn').disabled = (currentPage === 1);
    document.getElementById('nextBtn').disabled = (currentPage === totalPages);
}
