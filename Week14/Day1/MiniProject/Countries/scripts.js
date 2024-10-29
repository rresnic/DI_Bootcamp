const fetchURL = "https://restcountries.com/v3.1/all";
const allCountries = document.getElementById("allCountries");
async function getCountries() {
    try {
        const response = await fetch(fetchURL);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const countryJson = await response.json();
        console.log(countryJson);
        return countryJson;
    } catch (e) {
        console.error(e);
    }
}

async function loadCountries(){
    loading(allCountries);
    let countries = await getCountries();
    if(countries) {
        allCountries.innerHTML = "";
    }    
    for(let country of countries){
        let countryFig = document.createElement("figure");
        let countryCap = document.createElement("figcaption");
        countryCap.textContent = country.name.common;
        let countryImg = document.createElement("img");
        countryImg.src = country.flags.png;
        countryFig.appendChild(countryCap);
        countryFig.appendChild(countryImg);
        countryFig.setAttribute("data-capital", country.capital[0])
        countryFig.dataset.countryName = country.name.common;
        countryFig.addEventListener("click", e=> loadInfo(e));
        allCountries.appendChild(countryFig);
    }
}
loadCountries();

function loading(elem) {
    elem.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
}

function loadInfo(e) {
    let selectedDiv = document.getElementById("selectedCountry");
    loading(selectedDiv);
    let myElem = e.target.closest("figure");
    let capital = myElem.dataset.capital;
    let country = myElem.dataset.countryName;
    selectedDiv.innerHTML = `<h3>${country}</h3><p>Capital: ${capital}</p>`;
}