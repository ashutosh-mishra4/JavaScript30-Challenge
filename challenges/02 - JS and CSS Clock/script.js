const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setSeconds() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = (6 * seconds) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}

function setMinutes() {
    const now = new Date()
    const minutes = now.getMinutes()
    const minutesDegrees = (6 * minutes) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
}

function setHours() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const hoursDegrees = (30 * hours) + (minutes/2) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setSeconds, 1000)
setInterval(setMinutes, 1000)
setInterval(setHours, 1000)