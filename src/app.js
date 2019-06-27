const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./util/geocode')
const forecast = require('./util/forecast')
const pexel = require('./util/pexel')
const travelad = require('./util/travelad')


//creating the express app
const app = express()
const port = process.env.PORT || 3000

//path config
const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname, '../templates/views')
// const partialsDir = path.join(__dirname, '../templates/partials')

//Handlebars and view locations
app.set('view engine', 'hbs')
app.set('views', viewsDir)
// hbs.registerPartials(partialsDir)

//using static data
app.use(express.static(publicDir))


//get call
app.get('', (req, res) => {
    res.render('index')
})
app.get('/info', (req, res) => {
    const add = req.query.address
    const code = req.query.code
    pexel(add, 10, 1, (error,picdata) => {
        if(error){
            return res.send({error})
        }
        geocode(add, (error, {lat, long, location} = {}) => {
            if(error){
                return res.send({ error })
            }
            forecast(lat, long, (error, weatherData) => {
                if(error){
                    return res.send({ error })
                   
                }
                travelad(code,(error, traveladData) => {
                    if(error){
                        return res.send({error})
                    }
                
                res.render('index',{
                    lat: lat,
                    long: long,
                    location: location,
                    summary: weatherData.summary,
                    dayOneTempMax: weatherData.entireData[0].temperatureMax,
                    dayOneTempMin: weatherData.entireData[0].temperatureMin,

                    dayTwoTempMax: weatherData.entireData[1].temperatureMax,
                    dayTwoTempMin: weatherData.entireData[1].temperatureMin,

                    dayThreeTempMax: weatherData.entireData[2].temperatureMax,
                    dayThreeTempMin: weatherData.entireData[2].temperatureMin,

                    dayFourTempMax: weatherData.entireData[3].temperatureMax,
                    dayFourTempMin: weatherData.entireData[3].temperatureMin,

                    dayFiveTempMax: weatherData.entireData[4].temperatureMax,
                    dayFiveTempMin: weatherData.entireData[4].temperatureMin,

                    iconOne: weatherData.entireData[0].icon,
                    iconTwo: weatherData.entireData[1].icon,
                    iconThree: weatherData.entireData[2].icon,
                    iconFour: weatherData.entireData[3].icon,
                    iconFive: weatherData.entireData[4].icon,

                    oneTime: weatherData.entireData[0].time,
                    twoTime: weatherData.entireData[1].time,
                    threeTime: weatherData.entireData[2].time,
                    fourTime: weatherData.entireData[3].time,
                    fiveTime: weatherData.entireData[4].time,

                    picdata1: picdata[0].src.large,
                    picdata2: picdata[1].src.large,
                    picdata3: picdata[2].src.large,
                    picdata4: picdata[3].src.large,
                    picdata5: picdata[4].src.large,
                    picdata6: picdata[5].src.large,
                    picdata7: picdata[6].src.large,
                    picdata8: picdata[7].src.large,
                    picdata9: picdata[8].src.large,

                    traveladData: traveladData.advisory.score,
                })

                })
            })
        
        })

    })

})



//Listen call
app.listen(port, () => {
    console.log('running on port: '+port)
})