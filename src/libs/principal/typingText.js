export default function typingText(text, splittedText, typeSpeed, nextFunc) {
  const textElement = document.getElementById("text");

  let i = 0;
  let interval = setInterval(function () {
    if (splittedText[i] !== text) {
      textElement.textContent = splittedText[i];
      i++;
    } else {
      textElement.textContent = splittedText[i];
      clearInterval(interval);
      nextFunc ? nextFunc() : null;
    }
  }, typeSpeed);
}
