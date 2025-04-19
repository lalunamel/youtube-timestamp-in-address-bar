const updateInterval = 5000;

let lastUpdatedTime = 0;

setInterval(() => {
  const video = document.querySelector('video');
  if (!video) return;

  const time = Math.floor(video.currentTime);
  if (Math.abs(time - lastUpdatedTime) < 5) return;

  const url = new URL(window.location.href);
  url.searchParams.set('t', `${time}s`);
  history.replaceState(null, '', url.toString());

  lastUpdatedTime = time;
}, updateInterval);
