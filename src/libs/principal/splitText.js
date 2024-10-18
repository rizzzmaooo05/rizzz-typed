export default function splitText(text) {
  let i = 0;
  let currentSplittedText = "";
  let splittedTextArr = [];

  for (let char of text) {
    currentSplittedText += char;
    splittedTextArr = [...splittedTextArr, currentSplittedText];
  }

  return splittedTextArr;
}