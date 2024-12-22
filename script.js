const socket = io();

const chatbox = document.getElementById('chatbox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Handle incoming messages
socket.on('message', (data) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = data;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
});

// Send message on button click
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('message', message); // Send to server
        messageInput.value = ''; // Clear input
    }
});

// Optional: Send message on Enter key press
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
