const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');

const modal = document.querySelector('.js-modal');
const modalBody = document.querySelector('.js-body');
const modalLogin = document.querySelector('.js-login-form');
const modalSwitchLogin = document.querySelector('.js-switch-login');
const modalRegister = document.querySelector('.js-register-form');
const modalSwitchRegister = document.querySelector('.js-switch-link-register');

// Add event listeners
registerLink.addEventListener('click', function() {
    showRegister();
});

modalSwitchRegister.addEventListener('click', function() {
    showRegister();
});

loginLink.addEventListener('click', function() {
    showLogin();
});

modalSwitchLogin.addEventListener('click', function() {
    showLogin();
});

modal.addEventListener('click', function() {
    hidenModel();
});

modalBody.addEventListener('click', function(event) {
    event.stopImmediatePropagation()
});

// Function
function showLogin() {
    modal.style.display = 'flex';
    modalLogin.style.display = 'flex';
    modalRegister.style.display = 'none';
}

function showRegister() {
    modal.style.display = 'flex';
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'flex';
}

function hidenModel() {
    modal.style.display = 'none';
    modalLogin.style.display = 'none';
    modalRegister.style.display = 'none';
}
