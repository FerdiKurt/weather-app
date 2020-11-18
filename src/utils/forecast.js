const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${latitude},${longitude}&units=f`

  request({ url, json: true }, (error, { body }) => {
    // console.log(body.current)
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degress out.'
      )
    }
  })
}

module.exports = forecast
