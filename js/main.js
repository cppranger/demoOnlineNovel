// TODO fuck with js imports

class Character {
    constructor(name, smile, eyesclosed, blush, frown) {
        this.name = name;
        this.smile = smile;
        this.eyesclosed = eyesclosed;
        this.blush = blush;
        this.frown = frown;
        const emotions = [this.smile, this.eyesclosed, this.blush, this.frown]
    }
}

const Rin = new Character("Rin", "img/sprites/Rin_Smile.png", "img/sprites/Rin_Eyesclosed.png", "img/sprites/Rin_Blush.png", "img/sprites/Rin_Frown.png");

const textFlow = document.getElementById('textflow-span');
const name = document.getElementById('name');
const text = document.getElementById('text');

// music('audio/music/bgm1.mp3');

text.textContent = "Hello!";
let canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
let rin = new Image();

rin.src = Rin.smile;

ctx.drawImage(rin, 500, 500);

document.addEventListener('keydown', function(event){
    if (event.code == 'Space') {
        text.textContent = "Haven't seen you in a while!";
    }
});

function music(song, Autoplay = true) {
    var audio = new Audio(); 
    audio.src = song;
    audio.autoplay = Autoplay; 
}