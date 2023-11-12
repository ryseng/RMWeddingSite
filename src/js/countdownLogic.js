var countDownDate = new Date("Nov 23, 2024 00:00:00").getTime();
const monthsElement = document.getElementById('month');
const daysElement = document.getElementById('day');
const hoursElement = document.getElementById('hour');
const minutesElement = document.getElementById('minute');
const secondsElement = document.getElementById('second');

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for months, days, hours, minutes and seconds
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Average days in a month
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    monthsElement.innerHTML = months < 10 ? '0' + months : months;
    daysElement.innerHTML = days < 10 ? '0' + days : days;
    hoursElement.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesElement.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsElement.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("new").innerHTML = "TODAY'S THE DAY!!";
    }
}, 1000);
