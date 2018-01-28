function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var spy = string
  console.log(`${spy}`)
}
spy.toUpperCase()

function logWhisper(string) {
  console.log(`${string}`)
}
logWhisper('hello')