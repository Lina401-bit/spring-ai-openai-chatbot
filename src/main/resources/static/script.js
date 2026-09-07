function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value;

    if (message.trim() === "") return;

    addMessage(message, "user");
    input.value = "";

   // fetch(`/ask-ai?prompt=${encodeURIComponent(message)}`)
   fetch(`/api/ask-ai?prompt=${encodeURIComponent(message)}`)
        .then(response => response.text())
        .then(reply => {
            addMessage(reply, "bot");
        });
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chatBox");
    let msg = document.createElement("div");
    msg.className = sender;
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

