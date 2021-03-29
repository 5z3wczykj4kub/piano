const whiteKeys = document.querySelectorAll('.white-key');
const blackKeys = document.querySelectorAll('.black-key');

whiteKeys.forEach(key => {
    key.addEventListener('click', event => {
        event.stopPropagation();
        key.lastElementChild.currentTime = 0;
        key.lastElementChild.play();

        key.classList.add('white-key--active');

        key.lastElementChild.addEventListener('ended', () => {
            key.classList.remove('white-key--active');
        })
    })
})

blackKeys.forEach(key => {
    key.addEventListener('click', event => {
        event.stopPropagation();
        key.lastElementChild.currentTime = 0;
        key.lastElementChild.play();

        key.classList.add('black-key--active');

        key.lastElementChild.addEventListener('ended', () => {
            key.classList.remove('black-key--active');
        })
    })
})