let play = document.querySelector('.play')
let played = false;
let audio = document.querySelector('.player')
play.addEventListener('mousedown', async () => {
    select_song = document.querySelector('#select_song');
    console.log('/succses?id=' + select_song.value);
    
    res = await fetch('/succses?id=' + select_song.value);
    data = await res.json();

    if (!played) {
        play.innerHTML = 'pause'
        console.log(audio);
        played = true
        if (data) {
            console.log(data);
            
            audio.src = data.src;
        }
        audio.play()
    }
    else {
        played = false
        audio.pause()
        play.innerHTML = 'play'
    }

})
