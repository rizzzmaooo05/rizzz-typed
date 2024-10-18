import addOpener from './src/libs/derived/addOpener.js'
import loop from "./src/libs/derived/loop.js";
import noLoop from "./src/libs/derived/noLoop.js";

export default function rizzzTyped(config) {
  let { query, texts, typeSpeed, deleteSpeed, blinkSpeed, isLoop } = config;

  if(query) {
    addOpener(query)

    if (!texts) {
      texts = [
        "this is text one",
        "this is text two",
        "this is last text",
      ];
    }
  
    if (!typeSpeed) {
      typeSpeed = 100;
    }
  
    if (!deleteSpeed) {
      deleteSpeed = 100;
    }
  
    if (!blinkSpeed) {
      blinkSpeed = 100;
    }
  
    if (isLoop) {
      loop(texts, typeSpeed, deleteSpeed, blinkSpeed);
    } else {
      noLoop(texts, typeSpeed, deleteSpeed, blinkSpeed);
    }

  } else return null
}
