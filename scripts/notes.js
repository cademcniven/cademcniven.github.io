let notes = document.querySelectorAll("#content a")
document.querySelector("#randomNote").href = notes[Math.floor(Math.random() * notes.length)].href