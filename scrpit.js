let soat =document.querySelector('.number')

let minut =document.querySelector('.number1')

let secund =document.querySelector('.number2')


function showTime() {

    let data = new Date()

    let hrs =data.getHours()

    let mnt =data.getMinutes()

    let secnd =data.getSeconds()

    soat.textContent = hrs;

    minut.textContent = mnt;

    secund.textContent = secnd;

}

setInterval(showTime, 1000)