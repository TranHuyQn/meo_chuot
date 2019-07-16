let canvas = document.getElementById('tomCat');
let ctx = canvas.getContext('2d');

let rat = function (name, weight, speed, status, xPosition, yPosition, index) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.index = index;

    this.sounding = function () {
        let sound = new Audio();
        sound.src = "ratSound.mp3";
        sound.play();
    };

    this.move = function () {
        if (this.xPosition >= canvas.width) {
            this.xPosition = 0;
        }
        this.xPosition += this.speed;
        if (this.index == 1) {
            this.index = 2;
        } else {
            this.index = 1;
        }
        console.log(this.xPosition);
    };

    this.draw = function () {
        let img = document.getElementById('rat' + this.index);
        ctx.drawImage(img, this.xPosition, this.yPosition);
    };
};

let cat = function (name, weight, speed, xPosition, yPosition, index) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.index = index;

    this.sounding = function () {
        let sound = new Audio();
        sound.src = "catSound.mp3";
        sound.play();
    };

    this.move = function () {
        if (this.xPosition >= canvas.width) {
            this.xPosition = 0;
        }
        this.xPosition += this.speed;
        if (this.index == 1) {
            this.index = 2;
        } else {
            this.index = 1;
        }
        console.log(this.xPosition);
    };

    this.eat = function (rat) {
        if (this.xPosition + 90 > rat.xPosition && this.xPosition + 90 < rat.xPosition + 40){
            alert('Ăn được rồi!');
            this.weight += rat.weight;
            console.log(this.weight);
        } else {
            alert('Ăn hụt!');
        }
    };

    this.checkWeight = function () {
      return this.weight;
    };

    this.draw = function () {
        let img = document.getElementById('cat' + this.index);
        ctx.drawImage(img, this.xPosition, this.yPosition);
    };
};

let jerry = new rat('jerry', 1, 10, 'living', 10, 150, 1);
let tom = new cat('tom', 2, 10, 150, 125, 1);

function petDraw(){
    jerry.draw();
    tom.draw();
}

petDraw();

function sounding(pet) {
    pet.sounding();
}

function run() {
    ctx.clearRect(0,0, canvas.width,canvas.height);
    jerry.move();
    jerry.draw();
    tom.draw();
setTimeout(run,100);
}

function runTom() {
    ctx.clearRect(0,0, canvas.width,canvas.height);
    tom.move();
    tom.draw();
    jerry.draw();
    setTimeout(runTom,100);
}

function eat() {
    tom.eat(jerry);
}

function checkWeight() {
    alert('Cân nặng: ' + tom.checkWeight());
}