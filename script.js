const open = document.getElementById('open');
const modalcontainer = document.getElementById('modalcontainer');
const close = document.getElementById('close');
const input = document.getElementById('mce-EMAIL');

open.addEventListener('click', () => {
    modalcontainer.classList.add('show');
});

close.addEventListener('click', () => {
    modalcontainer.classList.remove('show');
    input.value = '';
});
