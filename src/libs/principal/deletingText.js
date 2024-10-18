export default function deletingText(splittedText, deleteSpeed, nextFunc) {
  const textElement = document.getElementById("text");

  let i = splittedText.length - 1;
  let interval = setInterval(function () {
    if (splittedText[i - 1]) {
      textElement.textContent = splittedText[i - 1];
      i--;
    } else {
      textElement.textContent = "";
      clearInterval(interval);
      nextFunc ? nextFunc() : null;
    }
  }, deleteSpeed);
}
