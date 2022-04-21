const url = 'https://bootcamp-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry%2Cphotos%2Cplace_id&input=indian&inputtype=textquery&key=AIzaSyA4jqADXbsqKUUjnvdb8BjUpHLTv_pLezI'

// index 0 = imAmped
// index 1 = familyvibe
// index 2 = thinker
// index 3 = frightNight
// index 4 = loveIn
const results = {
    horoscope: {
        aries: [9,5,3,8,5],
        taurus: [5,5,5,5,5],
        gemini: [2,5,6,2,7],
        cancer: [2,5,4,7,5],
        leo: [7,5,6,3,5],
        virgo: [5,5,7,5,5],
        libra: [3,5,2,5,5],
        scorpio: [9,3,5,9,3],
        sagittarius: [2,7,2,2,7],
        capricorn: [1,9,2,5,8],
        aquarius: [4,8,4,6,7],
        pisces: [8,1,7,7,1]
    },
    mood: {
        0: [2,2,5,7,1],
        1: [3,3,5,7,2],
        2: [4,4,5,7,3],
        3: [4,4,5,7,4],
        4: [4,4,5,7,5],
        5: [5,5,5,7,6],
        6: [5,5,6,7,7],
        7: [6,6,6,7,7],
        8: [6,6,7,7,8],
        9: [7,7,7,7,9],
        10: [8,8,8,8,10]
    },
    pet: {
        dog: [8,8,8,8,8],
        cat: [8,2,6,8,4]
    },
    season: {
        summer: [8,5,5,5,5],
        winter: [5,5,5,5,8],
        autumn: [5,5,8,5,5],
        spring: [5,8,5,5,5]
    }
}

var finalResult = [...Array(5)]

var selected = [results.horoscope.virgo,results.mood[7], results.pet.dog, results.season.summer]

for(const element of selected) {
    for(let i = 0; i < finalResult.length; i++){
        if(finalResult[i] === undefined){
            finalResult[i] = element[i]
        }else{
            finalResult[i] += element[i]
        }
    }
}

var moodIndex = finalResult.indexOf(Math.max(...finalResult))
var mood
if(moodIndex === 0){
    mood = 'imAmped'
}else if(moodIndex === 1){
    mood = 'familyvibe'
}else if(moodIndex === 2){
    mood = 'thinker'
}else if(moodIndex === 3){
    mood = 'frightNight'
}else{
    mood = 'loveIn'
}

console.log(finalResult)
console.log(mood)

fetch(url,{
    origin: true
}).then((response) => {
    return response.json();
}).then(data => {
    console.log(data);
})
