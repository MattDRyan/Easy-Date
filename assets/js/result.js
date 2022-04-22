const variables = window.location.href.split('?')[1].split('&')
const mood = variables[0].split('=')[1]
const cuisine = variables[1].split('=')[1]