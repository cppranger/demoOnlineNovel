const textFlow = document.getElementById('textflow-span');
const leftPos = document.getElementById('left-pos');
const centPos = document.getElementById('center-pos');
const rightPos = document.getElementById('right-pos');
const name = document.getElementById('name');
const text = document.getElementById('text');
const current = document.getElementById('pos');

const rinSmile = document.createElement('img');
rinSmile.src = "img/sprites/Rin_Smile.png";
rinSmile.classList.add("sprite");
rinSmile.id = "pos";

const rinEyesClosed = document.createElement('img');
rinEyesClosed.src = "img/sprites/Rin_Eyesclosed.png";
rinEyesClosed.classList.add("sprite");
rinEyesClosed.id = "pos";

const rinBlush = document.createElement('img');
rinBlush.src = "img/sprites/Rin_Blush.png";
rinBlush.classList.add("sprite");
rinBlush.id = "pos";

const rinFrown = document.createElement('img');
rinFrown.src = "img/sprites/Rin_Frown.png";
rinFrown.classList.add("sprite");
rinFrown.id = "pos";

music('audio/music/bgm1.mp3');

text.textContent = "Hello!";

document.addEventListener('keydown', function(event){
    if (event.code == 'Space') {
        current.remove();
        centPos.appendChild(rinEyesClosed);
        text.textContent = "Haven't seen you in a while!";
    }
});

function music(song) {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = song; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}