document.addEventListener("DOMContentLoaded", function () {
  // Ambil nama dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('to') || 'Tamu Undangan';
  const guestNameElement = document.getElementById('guest-name');
  if (guestNameElement) {
    guestNameElement.textContent = decodeURIComponent(guestName);
  }

  // Countdown
  const targetDate = new Date("2025-06-30T10:00:00").getTime();
  const timerElement = document.getElementById("countdown-timer");

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (!timerElement) return;

    if (diff < 0) {
      timerElement.innerText = "Acara sedang berlangsung 🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerElement.innerText = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Musik dan tombol toggle
  
  document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("wedding-music");
  const toggleBtn = document.getElementById("toggle-music");

  if (toggleBtn && music) {
    console.log("toggleBtn dan music berhasil ditemukan");
    toggleBtn.addEventListener("click", () => {
      if (music.paused) {
        music.play()
          .then(() => {
            toggleBtn.textContent = "🔈 Matikan Musik";
          })
          .catch((e) => {
            console.error("Gagal memutar musik:", e);
          });
      } else {
        music.pause();
        toggleBtn.textContent = "🔇 Nyalakan Musik";
      }
    });
  }
});
});
