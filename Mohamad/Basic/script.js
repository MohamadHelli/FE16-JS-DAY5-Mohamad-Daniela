let results =
    document.querySelector("#results");
let themes = {
    "car": [{
        "model": "Tesla",
        "price": 20.000,
        "color": "white",
        "year": "2020",
    }, {
        "model": "mini cooper british",
        "price": 10.000,
        "color": "green",
        "year": "1967",
    }, {
        "model": "BMW",
        "price": 45.000,
        "color": "black",
        "year": "2020"
    }],
    "animal": [{
        "type": "Akita",
        "year": "geb. Dezember 2020",
    }, {
        "type": "Cattle Dog",
        "year": "geb. Dezember 2021",
    }, {
        "type": "Havanese",
        "year": "geb. Dezember 2020"
    }],
    "person": [{
        "name": "Mohamad",
        "age": 28,
    }, {
        "name": "Daniela",
        "age": 20,
    }, {
        "name": "anton",
        "age": 25
    }]
}

results.innerHTML = "<h2>cars:</h2>"
for (i = 0; i < themes.car.length; i++) {
    results.innerHTML += `<div><h3> ${themes.car[i].model} </h3><b>price:</b> ${themes.car[i].price} EUR    
    <br><b>color:</b> ${themes.car[i].color}
    <br><b>year:</b> ${themes.car[i].year}</div>`;
}

results.innerHTML += "<hr><h2>animal:</h2>"
for (i = 0; i < themes.animal.length; i++) {
    results.innerHTML += `<div><h3> ${themes.animal[i].type} </h3><br><b>type:</b> ${themes.animal[i].type}
    <br><b>year:</b> ${themes.animal[i].year}
      </div>`;
}
results.innerHTML += "<hr><h2>person:</h2>"
for (i = 0; i < themes.person.length; i++) {
    results.innerHTML += `<div><br><b>name:</b> ${themes.person[i].name}
    <br><b>age:</b> ${themes.person[i].age}
      </div>`;
}