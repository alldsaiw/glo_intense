
const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.btn');
const modalClose = document.querySelector('.modal-close');
const body = document.querySelector('body');

buttonModal.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');

    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal-inner');
    if(!isModal) {
        modalWindow.style.display = 'none';
    }
});

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
});