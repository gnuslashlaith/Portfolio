const audio = document.getElementById("audio");
const seekbar = document.getElementById("seekbar");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");

audio.addEventListener("loadedmetadata", () => {
    seekbar.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
    seekbar.value = audio.currentTime;
});

seekbar.addEventListener("input", () => {
    audio.currentTime = seekbar.value;
});

seekbar.addEventListener("mousedown", () => {
    if (audio.paused) {
        audio.play();
    }
});


audio.addEventListener("timeupdate", () => {
    seekbar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
    seekbar.max = audio.duration;
    durationDisplay.textContent = formatTime(audio.duration);
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}