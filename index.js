function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log.toUpperCase(`${string}`)
}
logShout('hello')

function logWhisper(string) {
  console.log(`${string}`)
}
logWhisper('hello')