'use strict';

{
    window.onload = ()=>{
        // 変数
        const time = JSON.parse(localStorage.getItem('settime')).time;
        let timenum = (time);
        const timerShow = document.getElementById('timer');
        const timeOver = document.getElementById('timeover');
        const startBtn = document.getElementById('start');
        const stopBtn = document.getElementById('stop');
        const exitBtn = document.getElementById('exit');
        let countTimer;

        timerShow.innerHTML=(timenum);
        stopBtn.style.display = 'none';
        timeOver.style.display = 'none';

        startBtn.onclick = ()=>{
            timerActive();
            startBtn.style.display = 'none';
            stopBtn.style.display = 'block';
        }
        stopBtn.onclick = ()=>{
            clearInterval(countTimer);
            stopBtn.style.display = 'none';
            startBtn.style.display = 'block';
        }
        let count = ()=>{
            timenum -= 1;
            timerShow.innerHTML=(timenum);

            if(timenum === 0){
                clearInterval(countTimer);
                timeOver.style.display = 'flex';
                exitBtn.onclick = ()=>{
                    location.href='timerset.html';
                }
            }
        }
        function timerActive(){
            countTimer = setInterval(count, 1000);
        }
    }
}