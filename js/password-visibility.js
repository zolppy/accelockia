const passwordVisibilityButton = document.getElementById('password-visibility-button');

/* Toggle password visibility */
passwordVisibilityButton.addEventListener('click', () => {
    const passwordInput = document.getElementById('password-input');
    const passwordIcon = document.getElementById('password-visibility-icon');

    const isPasswordVisible = passwordInput.type === 'text';

    passwordIcon.classList.toggle('fa-eye', !isPasswordVisible);
    passwordIcon.classList.toggle('fa-eye-slash', isPasswordVisible);
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
});