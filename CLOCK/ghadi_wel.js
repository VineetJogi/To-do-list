let hour = document.querySelector('#hr')
let minute = document.querySelector('#min')
let second = document.querySelector('#sec')

function displayTime(){
    let myDate = new Date()

    let hh = myDate.getHours() + 6
    let mm = myDate.getMinutes() + 30
    let ss = myDate.getSeconds()

    let hr = 30*hh + mm/2
    let mr = 6*mm + ss/120
    let sr = 6*ss

    hour.style.transform = `rotate(${hr}deg)`
    minute.style.transform = `rotate(${mr}deg)`
    second.style.transform = `rotate(${sr}deg)`

    if(hh>=12 && hh<=23){
        document.querySelector('.meridian').innerText = 'PM'
    }
    else{        
        document.querySelector('.meridian').innerText = 'AM'

    }
}

setInterval(displayTime , 1000)
displayTime()