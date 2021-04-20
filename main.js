const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');
const sounds = document.querySelectorAll('audio');

whiteKeys.forEach(key => {
    key.addEventListener('click', event => {
        event.stopPropagation();
        key.firstElementChild.currentTime = 0;
        key.firstElementChild.play();
    })

    key.firstElementChild.addEventListener('play', () => {
        key.classList.add('white-key--active');
    })
    key.firstElementChild.addEventListener('ended', () => {
        key.classList.remove('white-key--active');
    })
})

blackKeys.forEach(key => {
    key.addEventListener('click', event => {
        event.stopPropagation();
        key.firstElementChild.currentTime = 0;
        key.firstElementChild.play();
    })

    key.firstElementChild.addEventListener('play', () => {
        key.classList.add('black-key--active');
    })
    key.firstElementChild.addEventListener('ended', () => {
        key.classList.remove('black-key--active');
    })
})

const keyboardKeys = ['z', 's', 'x', 'd', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'm'];
const keyboardKeysForWhitePianoKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const keyboardKeysForBlackPianoKeys = ['s', 'd', 'g', 'h', 'j'];

document.addEventListener('keydown', event => {
    if(keyboardKeys.includes(event.key)) {
        if(event.repeat) return;

        const indexOfPressedKeyboardKey = keyboardKeys.indexOf(event.key);
        const sound = sounds[indexOfPressedKeyboardKey];

        sound.currentTime = 0;
        sound.play();
    }
})