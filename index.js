let hour_span = document.querySelector('.hour')
let min_span = document.querySelector('.minutes')
let sec_span = document.querySelector('.seconds')
let am_span = document.querySelector('.am')
let day_span = document.querySelector('.day')
let month_span = document.querySelector('.month')
let date_span = document.querySelector('.date')
let year_span = document.querySelector('.year')
let footer = document.querySelector('.footerdate')



setInterval(()=>{

    let time = new Date()

    let hrs = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let day = time.getDay()
    let month = time.getMonth()
    let date = time.getDate()
    let year = time.getFullYear()

        //   HOUR LOGISTICS
    if(hrs <= 9){
        hour_span.innerHTML = "0" + hrs
    }else(
        hour_span.innerHTML = hrs
    )

        //  MINUTES LOGISTICS
    if(min <= 9){
        min_span.innerHTML = "0" + min
    }else(
        min_span.innerHTML = min
    )

    // SECONDS LOGISTICS
    if(sec <= 9){
        sec_span.innerHTML = "0" + sec
    }else(
        sec_span.innerHTML = sec
    )

    // AM & PM LOGISTICS
    if(hrs < 12){
        am_span.innerHTML = "AM"
    }else(
        am_span.innerHTML = "PM"
    )


    // DAY LOGISTICS
    if(day == 0){
        day_span.innerHTML = "Sunday"
    }else if(day == 1){
        day_span.innerHTML = "Monday"
    }else if(day == 2){
        day_span.innerHTML = "Tuesday"
    }else if(day == 3){
        day_span.innerHTML = "Wednesday"
    }else if(day == 4){
        day_span.innerHTML = "Thursday"
    }else if(day == 5){
        day_span.innerHTML = "Friday"
    }else if(day == 6){
        day_span.innerHTML = "Saturday"
    }

    // MONTH LOGISTICS

    if(month == 0){
        month_span.innerHTML = "Janurary"
    }else if(month == 1){
        month_span.innerHTML = " Feburary"
    }else if(month == 2){
        month_span.innerHTML = " March"
    }else if(month == 3){
        month_span.innerHTML = "April"
    }else if(month == 4){
        month_span.innerHTML = "May"
    }else if(month == 5){
        month_span.innerHTML = "June"
    }else if(month == 6){
        month_span.innerHTML = "July"
    }else if(month == 7){
        month_span.innerHTML = "August"
    }else if(month == 8){
        month_span.innerHTML = "September"
    }else if(month == 9){
        month_span.innerHTML = "October"
    }else if(month == 10){
        month_span.innerHTML = "November"
    }else if(month == 11){
        month_span.innerHTML = "December"
    }


    date_span.innerHTML = date

    year_span.innerHTML = year

    footer.innerHTML = year + "."



},1000)


let theme = document.querySelector('.theme')
let roll= document.querySelector('.roll')
let body = document.querySelector('body')



theme.addEventListener('click',()=>{
    roll.classList.toggle('right')
    body.classList.toggle('color')
})