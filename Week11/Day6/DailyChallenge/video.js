
    // Create a class named Video. The class should be constructed with the following parameters:
    //     title (a string)
    //     uploader (a string, the person who uploaded it)
    //     time (a number, the duration of the video - in seconds)
    // Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    // Instantiate a new Video instance and call the watch() method.
    // Instantiate a second Video instance with different values.
    // Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
    // Think of the best data structure to save this information within the array.
    // Bonus: Loop through the array to instantiate those instances.

class Video {
    /**
     * 
     * @param {string} title 
     * @param {string} uploader 
     * @param {number} time 
     */
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}

let myVideo = new Video("LOTR", "Yitzy", 8800);
myVideo.watch();
let newVideo = new Video("HP", "Aaron", 7200);
// I assumed we should watch it too, otherwise it's a bit pointless
newVideo.watch();

// generated array of objects to save time. 
let videoCollection = [
  { title: "Epic Journey Video", uploader: "MediaGuru", time: 886 },
  { title: "Legacy Quest Adventure", uploader: "MediaGuru", time: 1230 },
  { title: "Legacy Legacy Legacy", uploader: "MediaGuru", time: 3052 },
  { title: "Story Journey Epic", uploader: "FilmFanatic", time: 2582 },
  { title: "Journey Adventure Adventure", uploader: "JohnDoe", time: 398 }
]

let myVideos = [];
for (let video of videoCollection){
    let loopVideo = new Video(video.title, video.uploader, video.time);
    myVideos.push(loopVideo);
}

for(let video of myVideos){
    video.watch();
}