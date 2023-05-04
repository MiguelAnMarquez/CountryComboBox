
var countries = [];

function extractAPIData() {
    console.log("Extrayendo Elementos");
    select = document.getElementById('CountrySelect');
    var url = 'https://restcountries.com/v3.1/independent?status=true';
    fetch(url)
    .then(response => response.json())
    .then(json => {
        for (item of json) {
            countries.push(item);
            crearOption(select, item.name.common, item.name.common);
        }
        console.log(countries.length, "Elementos han sido extraidos.");
    });
}

function showCountryData() {
    
    if (document.getElementById('HelloWorldXD') != null) {
        oldT = document.getElementById('HelloWorldXD')
        oldT.parentNode.removeChild(oldT);
    }

    select = document.getElementById('CountrySelect');
    console.log("Objeto:", select.value);
    console.log("Nombre del Paise:", countries[select.value].name.common);
    
    var countryTable = document.createElement('table');
    countryTable.border = "1";
    countryTable.id = "HelloWorldXD"

    var Row0 = document.createElement('tr');
    var th = document.createElement('th');

    for (let i = 0; i < 8; i++) {
        th = document.createElement('th')
        switch (i) {
            case 0:
                th.innerText = "Nombre del País"
              break;
            case 1:
                th.innerText = "Nombre Oficial"
              break;
            case 2:
                th.innerText = "Capital"
              break;
            case 3:
                th.innerText = "Moneda"
              break;
            case 4:
                th.innerText = "Idiomas"
              break;
            case 5:
                th.innerText = "Bandera"
              break;
            case 6:
                th.innerText = "Escudo de Armas"
              break;
            case 7:
                th.innerText = "Población"
              break;
            default:
              console.log("RIP");
          }
        Row0.appendChild(th);
    }

    var Row1 = document.createElement('tr');
    var td = document.createElement('td');
    var hText = document.createTextNode(countries[select.value].name.common);
    td.appendChild(hText)
    Row1.appendChild(td)
    
    td = document.createElement('td');
    hText = document.createTextNode(countries[select.value].name.official);
    td.appendChild(hText)
    Row1.appendChild(td)

    td = document.createElement('td');
    hText = document.createTextNode(countries[select.value].capital[1]);
    td.appendChild(hText)
    Row1.appendChild(td)

    td = document.createElement('td');
    var ol = document.createElement('ol');
    if (countries[select.value].currencies != null) {
        let currLength = Object.values(countries[select.value].currencies).length
        for (let i = 0; i < currLength; i++) {
            var li = document.createElement('li');
            li.innerText = Object.values(countries[select.value].currencies)[i].name;
            ol.appendChild(li);
        }
        td.appendChild(ol)

    } else {
        td.innerText = "undefined"
    }
    Row1.appendChild(td)

    td = document.createElement('td');
    var ol = document.createElement('ol');
    if (countries[select.value].languages != null) {
        let currLength = Object.values(countries[select.value].languages).length
        for (let i = 0; i < currLength; i++) {
            var li = document.createElement('li');
            li.innerText = Object.values(countries[select.value].languages)[i];
            ol.appendChild(li);
        }
        td.appendChild(ol)

    } else {
        td.innerText = "undefined"
    }
    Row1.appendChild(td)

    td = document.createElement('td');
    td.appendChild(crearImagen(countries[select.value].flags.png))
    Row1.appendChild(td)

    td = document.createElement('td');
    td.appendChild(crearImagen(countries[select.value].coatOfArms.png))
    Row1.appendChild(td)

    td = document.createElement('td');
    hText = document.createTextNode(countries[select.value].population);
    td.appendChild(hText)
    Row1.appendChild(td)


    countryTable.appendChild(Row0);
    countryTable.appendChild(Row1);
    document.body.appendChild(countryTable);
}

