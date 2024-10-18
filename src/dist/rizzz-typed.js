'use strict';

function addStyleSheet(query) {
  const styleSheet = `
    #cursor {
      text-decoration: none;
    }
    
    .hidden {
      visibility: hidden;
    }

    ${query} {
      display: inline;
    }
  `;

  const styleElement = document.createElement("style");
  styleElement.textContent = styleSheet;
  document.head.append(styleElement);
}

function addText(querySelector) {
  const textElement = document.createElement('span');
  const textText = document.createTextNode('');
  textElement.appendChild(textText);
  textElement.setAttribute('id', 'text');
  querySelector.appendChild(textElement);
  // console.log(cursorElement.children)
}

function addCursor(query) {
  const cursorElement = document.createElement('span');
  const cursorText = document.createTextNode('|');
  cursorElement.appendChild(cursorText);
  cursorElement.setAttribute('id', 'cursor');
  query.appendChild(cursorElement);
}

function querySelector(query) {
  return document.querySelector(query)
}

function addOpener(query) {
  addStyleSheet(query);
  addText(querySelector(query));
  addCursor(querySelector(query));
}

function splitText(text) {
  let currentSplittedText = "";
  let splittedTextArr = [];

  for (let char of text) {
    currentSplittedText += char;
    splittedTextArr = [...splittedTextArr, currentSplittedText];
  }

  return splittedTextArr;
}

function typingText(text, splittedText, typeSpeed, nextFunc) {
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

function deletingText(splittedText, deleteSpeed, nextFunc) {
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

function blinkCursor(type, blinkSpeed, nextFunc) {
  const cursor = document.getElementById('cursor');

  if(type === 'stop') {
    let i = 0;
    const interval = setInterval(function() {
      if(i < 6 ) {
        cursor.classList.toggle('hidden');
        i++;
      } else {
        clearInterval(interval);
        nextFunc? nextFunc() : null;
      }
    }, blinkSpeed);
  } else if(type === 'nonstop') {
    setInterval(function() {
      cursor.classList.toggle('hidden');
    }, blinkSpeed);

  } else {
    return null
  }
}

function onePhase(texts, typeSpeed, deleteSpeed, blinkSpeed, nextFunc) {
  let i = 0;
  
  function inner() {
    const text = texts[i];
    const splittedText = splitText(text);
    
    if(i < texts.length - 1) {
      typingText(text, splittedText, typeSpeed, function () {
        blinkCursor("stop", blinkSpeed, function() {
          deletingText(splittedText, deleteSpeed, function() {
            i++;
            inner();
          });
        });
      });
    } else {
      typingText(text, splittedText, typeSpeed, nextFunc ? nextFunc : null);
    }
    
  }
  inner();
  
}

function loop(texts, typeSpeed, deleteSpeed, blinkSpeed) {
  function inner() {
    const splittedText = splitText(texts[texts.length - 1]);
    onePhase(texts, typeSpeed, deleteSpeed, blinkSpeed, function() {
      blinkCursor('stop', blinkSpeed, 
        function() {
        deletingText(splittedText, deleteSpeed, function() {
          inner();
        });
      }
    );
    });
  }
  inner();
}

function noLoop(texts, typeSpeed, deleteSpeed, blinkSpeed) {
  function inner() {
    onePhase(texts, typeSpeed, deleteSpeed, blinkSpeed, function() {
      blinkCursor('nonstop', blinkSpeed);
    });
  }
  inner();
}

function rizzzTyped(config) {
  let { query, texts, typeSpeed, deleteSpeed, blinkSpeed, isLoop } = config;

  if(query) {
    addOpener(query);

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