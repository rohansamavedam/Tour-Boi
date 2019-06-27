const PexelsAPI = require('pexels-api-wrapper');

var pexelsClient = new PexelsAPI("563492ad6f917000010000018956a68523bd45e2b749b5441707eb5a");

const pexel = (query, numone, numtwo, callback) => {
    pexelsClient.search(query, numone, numtwo)
    .then(function(result){
        callback(undefined, result.photos)
    }).
    catch(function(e){
        callback(e, undefined)
    });

}

module.exports = pexel


    // const geocode = (address, callback) => {
    //     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoicm9oYW5zYW1hdmVkYW0xIiwiYSI6ImNqeDQ5MGJ5ZTA2bWE0YXJ2N2VlZXd5bG0ifQ.XfE8ow2kH1VWTFr-VkaJ1Q&limit=1'
    //     request({url, json: true}, (error, {body}) => {
    //         if(error){
    //             callback('Network Error', undefined)
    //         }else if(body.features.length===0){
    //             callback('Invalid Destination, please enter a valid destination', undefined)
    //         }else{
    //             const data = body
    //             callback(undefined,{
    //                 long: data.features[0].geometry.coordinates[0],
    //                 lat: data.features[0].geometry.coordinates[1],
    //                 location: data.features[0].place_name
    //             })
    //         }
    //     })
    // }
    
