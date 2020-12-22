'use strict';

{
    window.onload = ()=>{
        const setbtn = document.getElementById('setbtn');

        setbtn.onclick = ()=>{
            const time = document.getElementById('time').value;
            let timeList = {
                time: time
            }
            localStorage.setItem('settime',JSON.stringify(timeList));

            function display(){
                let gettime = JSON.parse(localStorage.getItem('settime'));
                console.log(gettime.time);
            }
            display();

            location.href='counttimer.html';
        }
    }
}