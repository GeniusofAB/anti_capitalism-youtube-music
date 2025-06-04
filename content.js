function removeAds() {
  const adContainers = document.querySelectorAll('ytmusic-player-page ytmusic-player-ads, .advertisement, .ytp-ad-player-overlay');

  adContainers.forEach(ad => {
    ad.remove();
    showNotification("Реклама заблокирована");
  });

  const video = document.querySelector("video");
  if (video && video.duration > 0 && video.duration < 15) {
    video.currentTime = video.duration;
    showNotification("Видео-реклама пропущена");
  }
}

function showNotification(message) {
  const note = document.createElement("div");
  note.className = "adblock-notice";
  note.textContent = message;
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 3000);
}

setInterval(removeAds, 2000);