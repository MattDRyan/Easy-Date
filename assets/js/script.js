const heading = document.querySelector('#heading')
const contentContainer = document.querySelector('#content-container')

const url = 'https://bootcamp-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry%2Cphotos%2Cplace_id&input=indian&inputtype=textquery&key=AIzaSyA4jqADXbsqKUUjnvdb8BjUpHLTv_pLezI'

const questions = ['How about we start with your horoscope?','How awesome are you feeling?', 'Easy one. Dogs or Cats?','Choice of colour also helps our algorithm. Which one would you like to choose?','Ok lucky last. Your favourite season?']

const content = {
    0: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    1: [0,1,2,3,4,5,6,7,8,9,10],
    2: ['Dogs', 'Cats'],
    3: ['Red', 'Green', 'Yellow', 'Blue', 'Cyan', 'White', 'Black', 'Orange', 'Pink', 'Violet', 'Indigo'],
    4: ['Summer', 'Winter', 'Autumn', 'Spring']
} 

// index 0 = imAmped
// index 1 = familyVibe
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
        dogs: [8,8,8,8,8],
        cats: [8,2,6,8,4]
    },
    season: {
        summer: [8,5,5,5,5],
        winter: [5,5,5,5,8],
        autumn: [5,5,8,5,5],
        spring: [5,8,5,5,5]
    }
}

const cuisine = {
    0: ['indian'],
    1: ['parmi','comfort food'],
    2: ['thai restaurant','vietnamese restaurant'],
    3: ['pizza', 'fast food'],
    4: ['italian', 'french']
}

var finalResult = [...Array(5)]

var selected = [results.horoscope.aquarius]

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
var cuisineSelection = cuisine[moodIndex][Math.floor(Math.random()*cuisine[moodIndex].length)]

if(moodIndex === 0){
    mood = 'imAmped'
}else if(moodIndex === 1){
    mood = 'familyVibe'
}else if(moodIndex === 2){
    mood = 'thinker'
}else if(moodIndex === 3){
    mood = 'frightNight'
}else{
    mood = 'loveIn'
}

console.log(mood)
console.log(cuisineSelection)

// fetch(url,{
//     origin: true
// }).then((response) => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// })


function init(){
    heading.innerHTML = 'Can\'t find a date idea? Easy Date can help'
    contentContainer.innerHTML = '<button id="start-btn" class="rounded-full bg-sky-600 px-5 py-1 hover:bg-sky-200 hover:text-black text-3xl my-3">Let\'s Go</button>'
}

function startQuiz(){
    heading.innerHTML = questions[0]
    contentContainer.innerHTML = content[0].map((horoscope) => {
        return ('<button id="horoscope-btn" class="rounded-full bg-sky-600 px-5 py-1 hover:bg-sky-200 hover:text-black text-3xl mx-3 my-3 shadow-md ">' + horoscope +'</button>')
    }).join(' ')
}

function nextQuestion(q){
    var elementId
    heading.innerHTML = questions[q]
    if(q === 1){
        contentContainer.innerHTML = '<div class="w-full my-3"><input id="slider" type="range" list="tickmarks" value="5" min="0" max="10" class="w-full"><datalist id="tickmarks"><option value="0"></option><option value="1"></option><option value="2"></option><option value="3"></option><option value="4"></option><option value="5"></option><option value="6"></option><option value="7"></option><option value="8"></option> <option value="9"></option><option value="10"></option></datalist></div><button id="next-btn" class="rounded-full bg-sky-600 px-5 py-1 hover:bg-sky-200 hover:text-black text-3xl my-3">Next</button>'
    }else if(q === 3){
        contentContainer.innerHTML = content[q].map((val) => {
            if(val === 'White'){
                return ('<button id="color-btn" class="rounded-full bg-white px-5 py-1 hover:bg-sky-200 hover:text-black text-3xl mx-3 my-3 shadow-md text-black">' + val +'</button>')
            }else if(val === 'Black'){
                return ('<button id="color-btn" class="rounded-full bg-black px-5 py-1 hover:bg-sky-200 hover:text-black text-3xl mx-3 my-3 shadow-md text-white">' + val +'</button>')
            }else{
                return ('<button id="color-btn" class="rounded-full bg-'+val.toLowerCase()+'-600 px-5 py-1 hover:bg-sky-200 hover:text-black text-3xl mx-3 my-3 shadow-md ">' + val +'</button>')
            }
        }).join(' ')
    }
    
    else{
        if(q === 0){
            elementId = 'horoscope-btn'
        }else if(q === 2){
            elementId = 'animal-btn'
        }else{
            elementId = 'season-btn'
        }
        contentContainer.innerHTML = content[q].map((val) => {
            return ('<button id='+elementId+' class="rounded-full bg-sky-600 px-5 py-1 hover:bg-sky-200 hover:text-black text-3xl mx-3 my-3 shadow-md ">' + val +'</button>')
        }).join(' ')
    }
}

contentContainer.addEventListener("click",function(e){
    e.preventDefault();
    if(e.target.id === 'start-btn'){
        startQuiz()
    }
    if(e.target.id === 'horoscope-btn'){
        var selectedHoroscope = e.target.textContent.toLowerCase()
        selected[0] = results.horoscope[selectedHoroscope]
        console.log(selectedHoroscope)
        console.log(selected[0])
        nextQuestion(1)
    }
    if(e.target.id === 'next-btn'){
        var awesomeSlider = document.querySelector('#slider')
        var awesomeValue = awesomeSlider.value
        selected[1] = results.mood[awesomeValue]
        console.log(awesomeValue)
        console.log(selected[1])
        nextQuestion(2)
    }
    if(e.target.id === 'animal-btn'){
        var selectedAnimal = e.target.textContent.toLowerCase()
        selected[2] = results.pet[selectedAnimal]
        console.log(selectedAnimal)
        console.log(selected[2])
        nextQuestion(3)
    }
    if(e.target.id === 'color-btn'){
        console.log(e.target.textContent.toLowerCase())
        nextQuestion(4)
    }
    if(e.target.id === 'season-btn'){
        var selectedSeason = e.target.textContent.toLowerCase()
        selected[3] = results.season[selectedSeason]
        console.log(selectedSeason)
        console.log(selected[3])
    }
})

init()
