import onePhase from "./onePhase.js";
import blinkCursor from "../principal/blinkCursor.js";

export default function noLoop(texts, typeSpeed, deleteSpeed, blinkSpeed) {
  function inner() {
    onePhase(texts, typeSpeed, deleteSpeed, blinkSpeed, function() {
      blinkCursor('nonstop', blinkSpeed)
    })
  }
  inner()
}