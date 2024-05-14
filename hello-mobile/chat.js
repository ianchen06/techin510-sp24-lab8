document.getElementById("chatList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const chatTitle = document.getElementById("chatTitle");
    const chatWindow = document.getElementById("chatWindow");
    chatTitle.textContent = "Chat with " + e.target.textContent;
    chatWindow.innerHTML =
      '<p class="text-gray-800 p-2">Starting a new conversation with ' +
      e.target.textContent +
      "</p>";
  }
});

document
  .getElementById("messageInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" && this.value.trim() !== "") {
      const chatWindow = document.getElementById("chatWindow");
      const newMessage = document.createElement("p");
      newMessage.textContent = this.value;
      newMessage.className = "text-gray-800 p-2 ml-auto bg-blue-100";
      chatWindow.appendChild(newMessage);
      this.value = "";
    }
  });
