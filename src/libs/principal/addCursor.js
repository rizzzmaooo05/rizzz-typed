export default function addCursor(query) {
  const cursorElement = document.createElement('span')
  const cursorText = document.createTextNode('|')
  cursorElement.appendChild(cursorText)
  cursorElement.setAttribute('id', 'cursor')
  query.appendChild(cursorElement)
}