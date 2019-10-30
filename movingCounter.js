class MovingCounter {
    constructor() {
        this.posX = random(40, width - 40);
        this.posY = random(40, height - 40);
        this.velX = random(-6, 6);
        this.velY = random(-6, 6);

        this.color1 = random(0, 255);
        this.color2 = random(0, 255);
        this.color3 = random(0, 255);

        this.counter = 0;

        this.restor = random(1, 5);
    }

    comprobar(itm) {
        if(itm.posX > this.posX - 70 && itm.posX < this.posX + 70 &&
            itm.posY > this.posY - 150 && itm.posY < this.posY + 150) {
                stroke(255);
                strokeWeight(1);
                line(itm.posX, itm.posY, this.posX, this.posY);
        }
    }

    showCounter() {
        if(this.color1 > 255) {
            this.color1 = 0;
        }
        if(this.color2 > 255) {
            this.color2 = 0;
        }
        if(this.color2 > 255) {
            this.color2 = 0;
        }
        
        if(frameCount % 5 == 0) {
            this.color1++;
            this.color2++;
            this.color3++;
            this.counter += this.restor;
        }
        if(this.counter >= 255 || this.counter <= 0) {
            this.restor = -this.restor;
        }

        fill(abs(255 - this.color1), this.color2, abs(255 - this.color3));
        noStroke();
        rect(this.posX - 2, this.posY - 13, 27, 17, 5);
        fill(this.color1, this.color2, this.color3);
        text(this.counter, this.posX, this.posY);
        
    }

    moveCounter() {
        this.posX += this.velX;
        this.posY += this.velY;
        if(this.posX < 40 || this.posX > width - 40) {
            this.velX = -this.velX;
        }

        if(this.posY < 40 || this.posY > height - 40) {
            this.velY = -this.velY;
        }
    }
}