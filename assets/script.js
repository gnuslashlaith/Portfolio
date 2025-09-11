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

// trans hiding stuff

const changeButton = document.getElementById('changeButton');
const changeTitle = document.getElementById('changeTitle');
const changeName = document.getElementById('changeName');
const changePronouns = document.getElementById('changePronouns');
const changeAbout = document.getElementById('changeAbout');
changeButton.addEventListener('click', function() {
    changeTitle.textContent = 'GNU / Yasmeen';
    changeName.textContent = 'Name, age: yasmeen, 15';
    changePronouns.textContent = 'Pronouns: She/her';
    changeAbout.textContent = "HELLOHELLO welcome to my website I hope you like. I'm Yasmeen and I love to build things. I've been makin stuff with programming since the 5th grade and have been grinding ever since. I've only recently started web development (if you couldn't tell, ha ha ha..), but I've done C++, Java, and Robotics Development for quite some time now! I am mostly a hobbyist but as a career I would love to do research in quantum computation and use my future engineering prowess to help better our universe. Let's just hope i dont end up working for lockheed martin and cause mass destruction. OTHER than coding and engineering, I love music! I picked up my guitar again around December of 2023 and have been playing almost daily ever since. The most music theory I know is like... I don't even know man. What the minor pentatonic scale is? I should really brush up on it. I also write creatively! I write poetry and short stories, including D&D oneshots and campaigns and such. I might post my writings on here if I feel like it.";
    

});