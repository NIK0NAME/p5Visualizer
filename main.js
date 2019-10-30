
let counters = [];

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    for(var i = 0; i < 130; i++) {
        counters.push(new MovingCounter());
    }
}

function draw() {
    background(0,0,0);
    moveCounters();
}

function moveCounters() {
    counters.forEach(function(val, index){
        val.moveCounter();
        coliderz(val, index);
        noStroke();
        fill(200);
        rect(width / 2 - 100, height / 2 - 25, 200, 50, 10);
        fill(15, 47, 108);
        textSize(30);
        text("E - coordina", width / 2 - 80, height / 2 + 10);
        //val.showCounter();
        
    });
}

function coliderz(itm, i) {
    counters.forEach(function(val, index){
        if(i != index) {
            val.comprobar(itm);
        }
    });
}