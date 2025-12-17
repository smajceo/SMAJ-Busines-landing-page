function scrollToContant() {
    document.getElementById('contant') .scrollIntoView({ behavior: 'smooth'});
}

function sendMessage(event) {
    event.preventDefault();
    alert('Message sent successfully!');
}