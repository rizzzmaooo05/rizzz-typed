import splitText from "../principal/splitText.js";
import typingText from "../principal/typingText.js";
import deletingText from "../principal/deletingText.js";
import blinkCursor from "../principal/blinkCursor.js";

export default function onePhase(texts, typeSpeed, deleteSpeed, blinkSpeed, nextFunc) {
  let i = 0
  
  function inner() {
    const text = texts[i];
    const splittedText = splitText(text);
    
    if(i < texts.length - 1) {
      typingText(text, splittedText, typeSpeed, function () {
        blinkCursor("stop", blinkSpeed, function() {
          deletingText(splittedText, deleteSpeed, function() {
            i++
            inner()
          })
        });
      });
    } else {
      typingText(text, splittedText, typeSpeed, nextFunc ? nextFunc : null);
    }
    
  }
  inner()
  
}
