


var containerDivElem = document.createElement('div')
containerDivElem.setAttribute('class', 'container')
document.body.appendChild(containerDivElem)

var rowDivElem = document.createElement('div')
rowDivElem.setAttribute('class', 'row g-4 mt-3 mb-3')
containerDivElem.appendChild(rowDivElem)



var searching = document.createElement('div')
searching.setAttribute('class', 'search_width d-flex ms-2')
rowDivElem.appendChild(searching)


var searchItem = document.createElement('select')
searchItem.setAttribute('class', 'form-control ')
searching.appendChild(searchItem)

renderOption(pokemons)

function renderOption(pokemons) {

    let searchOption = document.createElement('option')
    searchOption.setAttribute('value', '1')
    searchOption.textContent = '--- Select the type of pokemon ---'
    searchOption.setAttribute('aria-readonly', 'true')
    searchItem.appendChild(searchOption)

    let arrPokType = ['']


    let i = 0;
    for (let pokemon of pokemons) {
        for (let pok of pokemon.type) {
            let boll = true
            for (let item of arrPokType) {
                if (item === pok) {
                    boll = false
                    break
                }
            }
            if (boll === true) {
                arrPokType[i] = pok;
                i++;

            }

        }
    }
    
    for(let son=0; son<arrPokType.length; son++){
        
        let searchOption2 = document.createElement('option')
        searchOption2.setAttribute('value', `${son + 1}`)
        searchOption2.textContent = arrPokType[son]
        // searchOption2.setAttribute('aria-readonly', 'true')
        searchItem.appendChild(searchOption2)
    }
    console.log(arrPokType);
}




var alertItem = document.createElement('div')
alertItem.setAttribute('class', 'col-10 alert ms-4 alert-info alert-dismissible fade show')
alertItem.setAttribute('role', 'alert')
rowDivElem.appendChild(alertItem)

var alertTextDiv = document.createElement('div')
alertTextDiv.textContent = `You can see `
alertItem.appendChild(alertTextDiv)


var alertSpan = document.createElement('div')
alertSpan.textContent = `blue`
alertSpan.setAttribute('class', `badge bg-primary color-pirmary`)
alertTextDiv.appendChild(alertSpan)

alertTextDiv.textContent += ' items are strength of hero and yellow items are weaknesses of the hero'





var alertCloseBtn = document.createElement('button')
alertCloseBtn.setAttribute('type', 'button')
alertCloseBtn.setAttribute('data-bs-dismiss', 'alert')
alertCloseBtn.setAttribute('class', 'btn-close')
alertCloseBtn.setAttribute('aria-label', 'Close')
alertItem.appendChild(alertCloseBtn)

function createColorfulSpan(color) {
    let alertSpan = document.createElement('span')
    alertSpan.textContent = 'blue'
    alertSpan.setAttribute('class', `badge bg-primary`)

    return alertSpan
}

for (var pok of pokemons) {
    var colDivElem = document.createElement('div')
    colDivElem.setAttribute('class', 'card_style_changed card pb-3 pt-2 col-12 ms-4 me-4 col-sm-6 col-md-3 shadow')

    var pokImgDiv = document.createElement('div')
    pokImgDiv.setAttribute('class', 'pokemonImg bg-primary ms-4 rounded-circle mb-2')
    colDivElem.appendChild(pokImgDiv)

    var pokImg = document.createElement('img')
    pokImg.setAttribute('src', pok.img)
    pokImg.setAttribute('alt', 'Thete must be a describtion photo of current movie')
    pokImgDiv.appendChild(pokImg)

    var pokStart = document.createElement('div')
    pokStart.setAttribute('class', 'd-flex align-items-center')
    colDivElem.appendChild(pokStart)

    var pokTitle = document.createElement('h3')
    pokTitle.textContent = pok.name
    pokTitle.setAttribute('class', 'me-3')
    pokStart.appendChild(pokTitle)

    var pokType = document.createElement('div')
    pokStart.appendChild(renderType(pok))

    var pokWeak = document.createElement('div')
    colDivElem.appendChild(renderWeak(pok))



    rowDivElem.appendChild(colDivElem)

}

function renderType(pok) {

    for (let singleType of pok.type) {
        let temp = document.createElement('div')
        temp.textContent = singleType
        temp.setAttribute('class', 'badge bg-primary me-2 ')
        pokType.appendChild(temp)
    }

    return pokType
}

function renderWeak(pok) {

    for (let singleWeak of pok.weaknesses) {
        let temp = document.createElement('div')
        temp.textContent = singleWeak
        temp.setAttribute('class', 'badge bg-warning me-3')
        pokWeak.appendChild(temp)
    }

    return pokWeak
}


// console.log(pokemons[1].type);