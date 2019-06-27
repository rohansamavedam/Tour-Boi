const request = require('request')

const travelad = (code, callback) => {
    const url = 'https://www.travel-advisory.info/api?countrycode=' + code
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Network Error', undefined)
        }else{
            callback(undefined, body.data[code])
        }
    })
}
module.exports = travelad