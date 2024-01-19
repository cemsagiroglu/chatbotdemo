const correctPassword = "python"; // Replace with your desired password

function checkPassword() {
  const enteredPassword = document.getElementById("password").value;

  if (enteredPassword === correctPassword) {
    window.location.href = "chatbot.html"; // Redirect to chatbot page
  } else {
    alert("Incorrect password. Please try again.");
  }
}
