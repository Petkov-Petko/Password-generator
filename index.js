
const passwordInput = document.getElementById("text");
const generateButton = document.getElementById("button");

function generateRandomPassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    const charsetLength = charset.length;
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * charsetLength);
      password += charset.charAt(randomIndex);
    }
  
    passwordInput.value = password
  }

generateButton.onclick = generateRandomPassword;

function copyTextToClipboard() {
    const inputElement = document.getElementById("text");
    inputElement.select(); 
    document.execCommand("copy"); // Копирайте текста в клипборда
}
document.getElementById("copyIcon").addEventListener("click", copyTextToClipboard);

