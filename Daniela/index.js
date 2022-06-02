// let results = document.getElementById("results");
// let themes = {
//     "Car": [{

//         "brand": "Alfa Romeo",
//         "model": "Giulia Quadrifoglio",
//         "color": "Red",
//         "year": "2015"
//     }, {

//         "brand": "Bugatti",
//         "model": "Chiron",
//         "color": "Blue",
//         "year": "2016-2022"
//     }, {

//         "brand": "Maserati",
//         "model": "MC20",
//         "color": "White",
//         "year": "2020"
//     }],
//     "Animals": [{
//         "breed": "Shiba Inu",
//         "name": "Lucky",
//         "age": "7 years",
//         "weight": "20 kg"

//     }, {

//         "breed": "Poodle",
//         "name": "Ollie",
//         "age": "7 years",
//         "weight": "15 kg"
//     }, {

//         "breed": "Siberian Husky",
//         "name": "Blaze",
//         "age": "7 years",
//         "weight": "20 kg"
//     }],
//     "Person": [{
//         "name": "Ana",
//         "age": "20",
//         "weight": "50 kg"

//     }, {
//         "name": "Dean",
//         "age": "25",
//         "weight": "80 kg"
//     }, {
//         "name": "Annie",
//         "age": "11",
//         "weight": "40"
//     }]
// }

// results.innerHTML = "<h2> Car Models:</h2>"
// for (i = 0; i < themes.Car.length; i++) {
//     results.innerHTML += `<div><h3> ${themes.Car[i].brand} </h3> <b>model:</b>
//     ${themes.Car[i].model} <br> <b>color:</b>
//     ${themes.Car[i].color} <br> <b>year:</b>
//     ${themes.Car[i].year}</div>`;
// }

// results.innerHTML += " <hr> <h2> Animals:</h2>"
// for (i = 0; i < themes.Animals.length; i++) {
//     results.innerHTML += `<div><h3> ${themes.Animals[i].breed} </h3> <b>name:</b>
//     ${themes.Animals[i].name} <br> <b>age:</b>
//     ${themes.Animals[i].age} <br> <b>weight:</b>
//     ${themes.Animals[i].weight} </div>`;
// }

// results.innerHTML += " <hr> <h2> Persons:</h2>"
// for (i = 0; i < themes.Person.length; i++) {
//     results.innerHTML += `<div><h3> ${themes.Person[i].name} </h3> <b>name:</b>
//     ${themes.Person[i].name} <br> <b>age:</b>
//     ${themes.Person[i].age} <br> <b>weight:</b>
//     ${themes.Person[i].weight} </div>`;
// }



//  Basic 2


let sentence = document.getElementById("sentence");
let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
let Sandwiches = JSON.parse(sandwiches);
let Fries = JSON.parse(fries);

sentence.innerHTML = ` My favorite sandwich is a ${Sandwiches.sandwich} which has approximately
${Sandwiches.calories} calories, along with it I enjoy eating ${Fries.fries_size}
which have about ${Fries.calories} calories.`