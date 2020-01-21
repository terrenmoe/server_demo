'use strict';
var cnv, colors, modLen, zap;
function setup() {
    cnv = createCanvas(innerWidth,innerHeight);
    zap = {
        'x1':mouseX,
        'y1':mouseY,
        'x2':random(width),
        'y2':random(height),
        update() {
            zap.x1=mouseX,
            zap.y1=mouseY;
            zap.x2=random(width),
            zap.y2=random(height);
        }
    };
    noLoop();
    frameRate(10);
    strokeWeight(3);
    colors = [];
    for (let i = 25; i > 5; i-=1) {
        for (let j = 10; j > 0; j-=1) {
            ellipse(
                240 + random(width-80),
                10 + random(40),
                random(50)+10,
                random(25)+30
            );
        }
        colors.push(color(i*3,i*3,i*8+50,200));
        colors.push(color(i*2,i*2,i*8+50,200));
    }
    modLen = (function() {
        let i = 0;
        return function() {
            if (i<500) {
                return ++i % (colors.length - 1);
            } return i*0;
        };
    }());
    fill(30, 100, 60);
    rect(0, height-80, width, 80);
}

function draw() {
    
}

function mouseClicked() {
    for (let i = floor(random(3)),j=zap; i > 0; i--) {
        stroke(colors[modLen()]);
        j = bolt(bolt(bolt(j)));
    }
}

function mouseMoved() {
    zap.update();
}
function bolt({ x1,y1,x2,y2 }={}) {
    line(x1,y1,x2,y2);
    x1-=10;
    y1-=10;
    x2-=x1;
    y2-=y1;
    return {}={ x1,
y1,
x2,
y2 };
}
