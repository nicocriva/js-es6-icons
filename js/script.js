// Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. 
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// Milestone 2 Coloriamo le icone per tipo
const tipoIcone = icons.map((element) => {
    if (element.type == 'animal'){
        element.iconColor = '#FF4C4C';
    } else if (element.type == 'vegetable'){
        element.iconColor = '#66B266';
    } else {
        element.iconColor = '#FFA500';
    }console.log(element);
    return element
});
console.log(tipoIcone);

// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
let select = document.getElementById('typeSelect');
select.addEventListener("click", function(){
    if( select.value == 'all' ){
        stampaIcone(icons)
    }else{
        const nuovoArr = icons.filter((element) => {
            return element.type == select.value
        })
        stampaIcone(nuovoArr)
    }
});
function stampaIcone(icone){
    const empty = document.getElementById('icons');
    empty.innerHTML = '';
    icone.forEach((element) => {
        empty.innerHTML += 
        `
        <div id="icon" class="icon-box ${element.family} ${element.prefix}${element.name}" style="color:${element.iconColor}">
        <div class="icon-name" style="font-size:20px">${element.name}</div>
        </div>
        `
    })
}