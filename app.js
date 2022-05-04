const chalk = require('chalk')
const geocode = require('./geocode')
const weather = require('./weather')

const location = process.argv[2]

if(location){
    geocode(location,(error, {latitude,longitude} = geocodeData) => {
        console.log(chalk.green.bold('Geocode Results'))
        if(error){
            return console.log('Error occured in geocode : ' + error)
        }
        console.log('latitude : '+ latitude)
        console.log('longitude : '+ longitude)
        
        weather(latitude,longitude,(error, {location,temperature,feelsLike} = weatherData) => {
            console.log(chalk.green.bold('Weather Results'))
            if(error)
                return console.log('Error occured in weather : '+error)
            console.log('Location : '+location)
            console.log('It is currently '+temperature+' degrees. It feels like '+feelsLike+' degrees.')
        })
    })
    
}else{
    console.log('Please provide location')
}


