const api_base= "https://swapi.dev/api/people/";
let person = document.getElementById("name");
let pHeight = document.getElementById("height");
let gender = document.getElementById("gender");
let birth = document.getElementById("birth");
let planet = document.getElementById("planet");
let generateBtn = document.getElementById("generateBtn");

let infos = [];
infos.push(pHeight, gender, birth, planet);

function clearInfo(){
    for (let info of infos){
        info.innerText = '';
    }
}

function loading() {
    person.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    clearInfo();
}

function showError(errorMsg) {
    person.innerHTML = errorMsg;
    clearInfo();
}

function findSomeone(){
    loading();
    let xhr = new XMLHttpRequest();
    // pick a random person, at the moment their site says it has 82 people.
    let rand = Math.floor(Math.random() * 82) + 1
    let url = api_base + rand;
    xhr.open('GET', url, true);
    xhr.responseType = 'json'; 

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let character = xhr.response;
            completeHomeworldInfo(character);
            console.log(xhr.response); 
        } else {
            showError('Oh No! That person isnt available.');
        }
    };

    xhr.onerror = function() {
        showError('Oh No! That person isnt available.');
    };

    xhr.send();
}

function completeHomeworldInfo(character){
    let xhr = new XMLHttpRequest();
    let url = character.homeworld;
    xhr.open('GET', url, true);
    xhr.responseType = 'json'; 

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            let homeworld = xhr.response;
            person.innerHTML = `<h2>${character.name}</h2>`;
            pHeight.innerHTML = `<strong>Height: </strong> ${character.height}`;
            gender.innerHTML = `<strong>Gender: </strong> ${character.gender}`;
            birth.innerHTML = `<strong>Birth Year: </strong> ${character.birth_year}`;
            planet.innerHTML = `<strong>HomeWorld: </strong> ${homeworld.name}`;
        } else {
            showError('Oh No! That person isnt available.');
        }
    };

    xhr.onerror = function() {
        showError('Oh No! That person isnt available.');
    };

    xhr.send();
}
generateBtn.addEventListener("click", findSomeone);

document.onload(findSomeone());