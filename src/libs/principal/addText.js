export default function addText(querySelector) {
  const textElement = document.createElement('span')
  const textText = document.createTextNode('')
  textElement.appendChild(textText)
  textElement.setAttribute('id', 'text')
  querySelector.appendChild(textElement)
  // console.log(cursorElement.children)
}