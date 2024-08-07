const body = document.querySelector('body');
const inputCheck = document.querySelector('#modo-noturno');

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    body.setAttribute('data-bs-theme', modo);
})