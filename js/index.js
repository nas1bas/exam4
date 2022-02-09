//=============================================================================================
const apiKey = 'ceaf0b99fa7a8067ddcbc52696137c55';


const list = findElement('.list');
const input = findElement('.input');

//=============================================================================================
function getData(evt) {
    fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=${apiKey}`
    )
        .then((res) => res.json())
        .then((data) => {
            list.textContent = "";
            renderData(data);
            let lat = evt.target.dataset.lat
            let lon = evt.target.dataset.lon

            localStorage.setItem('lat', lat)
            localStorage.setItem('lon', lon)

        }).catch((err) => console.log(err));


}


function renderData(data) {
    data.forEach(region => {
        let item = document.createElement('button');
        item.dataset.lat = region.lat;
        item.dataset.lon = region.lon;
        item.textContent = region.name;
        list.append(item);

        item.addEventListener('click', handleClick)
    })
}


input.addEventListener('input', getData)
//=================================================================================================


//========================= Regions ===============================================================
const regions = document.getElementsByClassName('region__item');

function handleClick(evt) {
    localStorage.setItem('lat', evt.target.dataset.lat)
    localStorage.setItem('lon', evt.target.dataset.lon)
    location.pathname = '/info.html';

    // console.log(dataset.lon);

}

for (let i = 0; i < regions.length; i++) {
    regions[i].addEventListener('click', handleClick)
}
//===================================================================================================