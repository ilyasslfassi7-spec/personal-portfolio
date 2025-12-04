/* AI Typing Effect */
const aiText = "Hello! I'm a passionate web creator exploring futuristic web design.";
let i = 0;

function typeText() {
  if (i < aiText.length) {
    document.getElementById("aiText").innerHTML += aiText.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}
typeText();

/* Optional: Simple AI Chat Widget */
const chatButton = document.createElement("button");
chatButton.innerText = "💬 Chat with AI";
chatButton.style.position = "fixed";
chatButton.style.bottom = "20px";
chatButton.style.right = "20px";
chatButton.style.background = "#00ffcc";
chatButton.style.color = "#0d0d0d";
chatButton.style.border = "none";
chatButton.style.padding = "12px 20px";
chatButton.style.borderRadius = "10px";
chatButton.style.cursor = "pointer";
chatButton.style.fontWeight = "bold";
chatButton.style.boxShadow = "0 0 10px #00ffcc, 0 0 20px #ff00ff";
document.body.appendChild(chatButton);

chatButton.addEventListener("click", () => {
  const userMsg = prompt("Ask the AI about this portfolio:");
  if (userMsg) {
    alert("AI says: This portfolio is futuristic, professional, and ready for clients!");
  }
});
