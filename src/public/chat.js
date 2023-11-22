const socket = io()
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
let user = ""
Swal.fire({
    title: "Correo electronico",
    input: "text",
    text: "Ingrese el correo electronico con el que desea iniciar sesión",
    inputValidator: value => {
        return !value.trim() && "Por favor ingrese un correo electronico"
    }
}).then((result) => user = result.value)

chatInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const messageText = chatInput.value.trim();
        socket.emit("message", { user, message: messageText })
    }
});

socket.on("logs", (data) => {
    console.log(data)
    let { user, message } = data
    console.log(user, message)
    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<p><i>${user}</i>:<i>${message}</i></p>`;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
})
