function scrollToContant() {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
}

function sendMessage(event) {
    event.preventDefault();
    alert('Message sent successfully!');
}

window.addEventListener('load', () => {
    const profilePicture = document.querySelector('.profile-picture');
    profilePicture.style.opacity = '0';
    setTimeout(() => {
        profilePicture.style.transition = 'opacity 1.5s ease';
        profilePicture.style.opacity = '1';
    }, 500);
});
