
var containerDivElem = document.createElement('div')
containerDivElem.setAttribute('class', 'container')
document.body.appendChild(containerDivElem)

var rowDivElem = document.createElement('div')
rowDivElem.setAttribute('class', 'row g-4 mt-3 mb-3')
containerDivElem.appendChild(rowDivElem)

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

for(var pok of pokemons){
    var colDivElem = document.createElement('div')
    colDivElem.setAttribute('class', 'card pb-3 pt-2 col-12 ms-4 me-4 col-sm-6 col-md-3 shadow')
    // colDivElem.style.width = '18rem'

    // colDivElemBody = document.createElement('div')
    // colDivElemBody.setAttribute('class', 'card-body')

    var pokImgDiv = document.createElement('div')
    pokImgDiv.setAttribute('class', 'pokemonImg bg-primary ms-4 rounded-circle mb-2')
    colDivElem.appendChild(pokImgDiv)

    var pokImg = document.createElement('img')
    pokImg.setAttribute('src', pok.img)
    pokImg.setAttribute('alt', 'Thete must be a describtion photo of current movie')
    pokImgDiv.appendChild(pokImg)

    var pokStart =document.createElement('div')
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

function renderType(pok){

    for(let singleType of pok.type){
        let temp = document.createElement('div')
        temp.textContent = singleType
        temp.setAttribute('class', 'badge bg-primary me-2 ')
        pokType.appendChild(temp)
    }

    return pokType
}

    function renderWeak(pok){

        for(let singleWeak of pok.weaknesses){
            let temp = document.createElement('div')
            temp.textContent = singleWeak
            temp.setAttribute('class', 'badge bg-warning me-3')
            pokWeak.appendChild(temp)
        }

        return pokWeak
    }


// console.log(pokemons[1].type);