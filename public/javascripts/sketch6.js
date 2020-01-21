'use strict';
var cnv, PIth;

function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    noStroke();
    colorMode(HSB, 2);
    PIth = PI/100;
    noLoop();
}

function draw() {
    push();
    scale(innerWidth/100, innerHeight/100);
    for (let i = -1; i < 1; i+=PIth) {
        for (let j = -1; j < 1; j+=PIth) {
            stroke(1+i, 1+j, 1);
            point(abs(1+i)*50, abs(1+j)*50);
        }
    }
    colorMode(RGB, 2);
    for (let i = 1; i > -1; i-=PIth) {
        for (let j = 1; j > -1; j-=PIth) {
            stroke(1+i, 1+j, 1);
            point(abs(i+1)*55, abs(j+1)*55);
        }
    }
    pop();
}
