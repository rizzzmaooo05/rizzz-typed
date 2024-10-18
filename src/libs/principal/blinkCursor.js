export default function blinkCursor(type, blinkSpeed, nextFunc) {
  const cursor = document.getElementById('cursor')

  if(type === 'stop') {
    let i = 0
    const interval = setInterval(function() {
      if(i < 6 ) {
        cursor.classList.toggle('hidden')
        i++
      } else {
        clearInterval(interval)
        nextFunc? nextFunc() : null
      }
    }, blinkSpeed)
  } else if(type === 'nonstop') {
    setInterval(function() {
      cursor.classList.toggle('hidden')
    }, blinkSpeed)

  } else {
    return null
  }
}