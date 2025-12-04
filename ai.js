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
