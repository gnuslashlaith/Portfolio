document.querySelectorAll(".songs").forEach((songCard) => {
    const audio = songCard.querySelector(".audio");
    const playButton = songCard.querySelector(".play");
    const pauseButton = songCard.querySelector(".pause");
    const seekbar = songCard.querySelector(".seekbar");
    const currentTimeDisplay = songCard.querySelector(".currentTime");
    const durationDisplay = songCard.querySelector(".duration");
    const volUp = songCard.querySelector(".vol-up");
    const volDown = songCard.querySelector(".vol-down");


    playButton.addEventListener("click", () => {
        audio.play();
    });

    pauseButton.addEventListener("click", () => {
        audio.pause();
    });


    audio.addEventListener("timeupdate", () => {
        seekbar.value = audio.currentTime;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });


    audio.addEventListener("loadedmetadata", () => {
        seekbar.max = audio.duration;
        durationDisplay.textContent = formatTime(audio.duration);
    });


    seekbar.addEventListener("input", () => {
        audio.currentTime = seekbar.value;
    });


    volUp.addEventListener("click", () => {
        audio.volume = Math.min(audio.volume + 0.1, 1); // Prevents exceeding max volume
    });

    volDown.addEventListener("click", () => {
        audio.volume = Math.max(audio.volume - 0.1, 0); // Prevents negative volume
    });


    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
});