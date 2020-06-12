const locations = ['Paris', 'Berlin', 'London']
const postalCodes = [15051, 79512, 43542]

function logWeatherData(input) {
  fetch(`https://api.weatherapi.com/v1/current.json` +
    `?key=0f99bed77d21482380e121900202805&q=${input}`)
    .then(data => data.json())
    .then(res => console.log(
      `Location: ${res.location.name}, ${res.location.region}, ${res.location.country}\n` +
      `Weather Information: ${res.current.condition.text} - ` +
      `${res.current.temp_c}\u00B0/${res.current.temp_f}\u00B0\n` +
      `Current Time and Date: ${res.location.localtime}`
    ))
    .catch(err => console.error('Error! ---', err))
}

logWeatherData(locations[2])
logWeatherData(postalCodes[1])
logWeatherData(locations[0])
