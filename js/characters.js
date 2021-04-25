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

