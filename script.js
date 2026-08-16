// 1. التحقق من كلمة السر
function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const secretWord = "love"; // اكتب كلمة السر التي تريدها هنا

    if (passwordInput === secretWord) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

// 2. حساب عداد الوقت (ضع تاريخ بدايتكم هنا)
const startDate = new Date("2024-01-01T00:00:00"); // عدّل التاريخ هنا

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