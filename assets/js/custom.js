// Force dark mode
document.addEventListener('DOMContentLoaded', function() {
    // Set dark mode
    document.documentElement.setAttribute('data-mode', 'dark');
    localStorage.setItem('mode', 'dark');

    // Override theme toggle if exists
    const modeToggle = document.querySelector('#mode-toggle');
    if (modeToggle) {
        modeToggle.style.display = 'none';
    }
});
