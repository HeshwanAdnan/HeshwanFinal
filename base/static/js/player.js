function togglePlay(audioId, button) {
    const audio = document.getElementById(audioId);
    const card = button.closest('.category-card');

    // Pause all other audios and remove beat-box class
    document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }
    });
    document.querySelectorAll('.category-card').forEach(c => {
        c.classList.remove('beat-box');
        const btn = c.querySelector('button');
        if (btn) btn.textContent = 'Play';
    });

    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause';
        card.classList.add('beat-box');
    } else {
        audio.pause();
        button.textContent = 'Play';
        card.classList.remove('beat-box');
    }

    audio.onended = function () {
        button.textContent = 'Play';
        card.classList.remove('beat-box');
    };
}

