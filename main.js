
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