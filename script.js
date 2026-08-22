// Password Check Function
function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    
    // Set your secret word here
    if (passwordInput.toUpperCase() === 'MARCY') {
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        
        // Auto play music when unlocked
        const music = document.getElementById('bg-music');
        if (music) { music.play(); }
    } else {
        errorMsg.style.display = 'block';
    }
}

// Live Countdown Timer (Set to May 25, 2025)
const startDate = new Date('May 25, 2025 00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

// Story Book Page Navigation
let currentPage = 1;
const totalPages = 4;

function changePage(direction) {
    document.getElementById(`page-${currentPage}`).classList.remove('active-page');
    currentPage += direction;
    document.getElementById(`page-${currentPage}`).classList.add('active-page');

    document.getElementById('pageIndicator').innerText = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prevBtn').disabled = (currentPage === 1);
    document.getElementById('nextBtn').disabled = (currentPage === totalPages);
}

// Toggle Fullscreen Function
function toggleFullscreen() {
    const btn = document.getElementById('fullscreenBtn');
    
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        }
        if (btn) btn.innerText = "Exit Fullscreen ✖";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        if (btn) btn.innerText = "Enter Fullscreen ⛶";
    }
}

// Reset button label if user exits fullscreen via Escape key
document.addEventListener('fullscreenchange', () => {
    const btn = document.getElementById('fullscreenBtn');
    if (!document.fullscreenElement && btn) {
        btn.innerText = "Enter Fullscreen ⛶";
    }
});
