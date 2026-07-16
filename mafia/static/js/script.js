let play = document.querySelector('.play');
let played = false;
let audio = document.querySelector('.player');
let tik = document.querySelector('.tik')
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
let start = {};
let timer = (num, time) => {
    console.log(`#num_${num == '1' ? 'one' : 'two'}`);

    let displayElem = document.getElementById(`num_${num == '1' ? 'one' : 'two'}`);
    console.log(displayElem);

    if (!start[num]) {
        start[num] = {
            intervalId: null,
            remaining: time,
            running: false
        };
    }

    let st = start[num];
    console.log(st);

    let btn = document.querySelector(`#btn_ps_${num == '1' ? 'one' : 'two'}`);
    let timer_start = () => {
        st.remaining -= 1;

        displayElem.textContent = st.remaining;
        console.log(st.remaining);

        if (st.remaining <= 0) {
            console.log(st.interval);
            clearInterval(st.intervalId)
            st.intervalId = null;
            st.running = false;
            displayElem.textContent = time;
            btn.textContent = 'start';
            tik.src = '/static/mp3/sound.mp3';
            tik.play()

        }



    }

    if (!st.running) {
        if (st.intervalId) {
            clearInterval(st.intervalId);
        }

        st.remaining = Number(displayElem.textContent) || time;
        st.running = true;
        btn.textContent = 'stop';

        st.intervalId = setInterval(timer_start, 1000);
    }
    else {
        clearInterval(st.intervalId);
        st.intervalId = null;
        st.running = false;
        btn.textContent = 'start';

        st.remaining = time;
        displayElem.textContent = time;
    }


    

}