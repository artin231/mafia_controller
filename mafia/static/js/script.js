let play = document.querySelector('.play')
let played = false;
let audio = document.querySelector('.player')
play.addEventListener('mousedown',() => {
if(!played){
        play.innerHTML = 'pause'
console.log(audio);
played = true
audio.play()
}
else{
    played=false
    audio.pause()
    play.innerHTML = 'play'
}

})
