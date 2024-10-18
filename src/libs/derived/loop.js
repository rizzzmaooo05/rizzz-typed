import onePhase from "./onePhase.js";
import blinkCursor from "../principal/blinkCursor.js";
import deletingText from "../principal/deletingText.js";
import splitText from "../principal/splitText.js";

export default function loop(texts, typeSpeed, deleteSpeed, blinkSpeed) {
  function inner() {
    const splittedText = splitText(texts[texts.length - 1])
    onePhase(texts, typeSpeed, deleteSpeed, blinkSpeed, function() {
      blinkCursor('stop', blinkSpeed, 
        function() {
        deletingText(splittedText, deleteSpeed, function() {
          inner()
        })
      }
    )
    })
  }
  inner()
}