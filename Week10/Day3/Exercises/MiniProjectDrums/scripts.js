let keys = "ASDFGHJKL";
let drumKeys = [];
let sounds = ["./sounds/boom.wav", "./sounds/clap.wav", "./sounds/hihat.wav", "./sounds/kick.wav", "./sounds/openhat.wav", "./sounds/ride.wav", "./sounds/snare.wav", "./sounds/tink.wav", "./sounds/tom.wav"];
let notes = {};
for(let key of keys.split('')){
    drumKeys.push(`Key${key}`);
}

function createKeys(){
    if(drumKeys.length != sounds.length){
        console.log(drumKeys);
        console.log(sounds);
        console.log("Issue with keys or sounds arrays");
        return;
    }
    for(let i = 0; i< keys.length; i++){
        notes[drumKeys[i]] = sounds[i]
    }
}
function createNotes(){
    let noteDiv = document.getElementById("notes");
    for(let key of Object.keys(notes)) {
        let sound = document.createElement("audio")

        sound.src= notes[key];
        sound.setAttribute("key", key);
        noteDiv.appendChild(sound);
    }
}

function createDrums(){
    let drumDiv = document.getElementById("container");
    console.log(drumDiv);
    for(let i=0; i < drumKeys.length; i++){
        let drum = document.createElement('div');
        drum.classList.add("drum")
        drum.setAttribute("key", drumKeys[i]);
        drum.innerHTML = `<kbd>${drumKeys[i][3]}</kbd><br><span class="sound">${notes[drumKeys[i]].slice(9, -4)}`
        drum.addEventListener("mousedown", () => {
            playNote(drumKeys[i]);
        })
        console.log(drum);
        drumDiv.appendChild(drum);
    }
}

function playNote(code){
    let drum = document.querySelector(`.drum[key='${code}']`);
    let note = document.querySelector(`audio[key='${code}']`);
    drum.classList.add("active");
    setTimeout(()=>{
        drum.classList.remove("active");
    }, 150);
    note.currentTime = 0;
    note.play();
}
document.addEventListener("keydown", (event)=>{
    if(Object.keys(notes).find(key => key === event.code) === undefined){
        return;
    }
    playNote(event.code);
})
createKeys();
createNotes();
createDrums();
