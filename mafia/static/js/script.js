let play = document.querySelector('.play');
let played = false;
let audio = document.querySelector('.player');
play.addEventListener('click', async () => {
    select_song = document.querySelector('#select_song');
    console.log('/succses?id=' + select_song.value);

    res = await fetch('/succses?id=' + select_song.value);
    data = await res.json();

    if (!played) {
        play.innerHTML = 'pause';
        console.log(audio);
        played = true;
        if (data) {
            console.log(data);

            audio.src = data.src;
        }
        audio.play();
    }
    else {
        played = false;
        audio.pause();
        play.innerHTML = 'play';
    }

})
let start = false;
let timer = (num) => {
    console.log(`#num_${num == '1' ? 'one' : 'two'}`);

    let num_timer = document.getElementById(`num_${num == '1' ? 'one' : 'two'}`);
    console.log(num_timer);

    let btn = document.querySelector(`#btn_ps_${num == '1' ? 'one' : 'two'}`);
    let timer_start = () => {
        num = Number(num_timer.innerHTML);
        if (num <= 0) {
            location.reload()
        }
        else {

            num -= num_m;
            num_timer.innerHTML = num;
        }

    }
    num_m = 1;
    var intreval;
    if (!start) {
        start = true;
        btn.innerHTML = 'stop';
        intreval = setInterval(timer_start, 1000);

    }
    else {
        clearInterval(intreval);
        num_timer.innerHTML = 60;
        btn.innerHTML = 'start';
        start = false;
        num_m = 0;
        location.reload()
    }

}