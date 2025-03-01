let countdown;
let timeRemaining;

function startCountdown() {
  clearInterval(countdown); // Önceki geri sayımı durdur
  timeRemaining = document.getElementById("timeInput").value;
  let display = document.getElementById("countdownDisplay");

  if (timeRemaining <= 0) {
    display.innerText = "Lütfen geçerli bir süre girin!";
    return;
  }

  display.innerText = timeRemaining;
  countdown = setInterval(() => {
    timeRemaining--;
    display.innerText = timeRemaining;
    if (timeRemaining <= 0) {
      clearInterval(countdown);
      display.innerText = "Süre doldu!";
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdown);
  document.getElementById("countdownDisplay").innerText =
    "Süreyi girin ve Başlat’a basın";
}
