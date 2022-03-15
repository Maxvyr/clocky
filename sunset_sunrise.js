const clock = document.querySelector(".clock")
const hText = document.querySelectorAll(".h-text")
let test = false

const fetchSunriseSunset = async () => {
    return await fetch('https://api.sunrise-sunset.org/json?lat=45.750660&lng=3.111450&date=today')
    .then(response => response.json())
    .then(data =>  data.results)
    .catch(err => console.error(err));
}


const getSunriseSunset = async () => {
    const resp = await fetchSunriseSunset()
    const res = {
        "sunrise" : resp.sunrise,
        "sunset": resp.sunset
    }
    return res
}

const parseDate = async () => {
    const data = await getSunriseSunset()
    const stringSunset = data.sunset.slice(0,-3)
    const stringSunrise= data.sunrise.slice(0,-3)
    const hourSunset = parseInt(stringSunset.slice(0,2)) + 12
    const hourSunrise = parseInt(stringSunrise.slice(0,2))
    const minSunset = parseInt(stringSunset[2] +  stringSunset[3])
    const minSunrise = parseInt(stringSunrise[2] +  stringSunrise[3])
    const secSunset = parseInt(stringSunset.slice(-2))
    const secSunrise = parseInt(stringSunrise.slice(-2))
    const dateSunset = new Date()
    const dateSunrise = new Date()
    dateSunset.setHours(hourSunset,minSunset,secSunset)
    dateSunrise.setHours(hourSunrise,minSunrise,secSunrise)
    return {
        "dateSunrise" : dateSunrise,
        "dateSunset" : dateSunset
    }
}


const colorClock = async () => {
    const now = new Date()
    const daySunriseAndSunset = await parseDate()
    if (now > daySunriseAndSunset.dateSunrise && now < daySunriseAndSunset.dateSunset){
        clock.classList.add("clock-day")
        clock.classList.remove("clock-night")
        hText.forEach((element, index, obj) => {
            element.classList.add("color-text-day")
            element.classList.remove("color-text-night")
        })
    } else {
        clock.classList.add("clock-night")
        clock.classList.remove("clock-day")
        hText.forEach((element, index, obj) => {
            element.classList.add("color-text-night")
            element.classList.remove("color-text-day")
        })
    }
}


setInterval(colorClock, 2000)
colorClock()
