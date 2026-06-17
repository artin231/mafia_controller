document.body.addEventListener('mousedown',() => {
let audio = document.querySelector('.player')
console.log(audio);

let play = () => {
audio.play()
}

play();
})
