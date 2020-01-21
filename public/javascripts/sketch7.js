'use strict';
var cnv, colorIt, quader, sw;

function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    // env
    frameRate(10);
    colorMode(RGB, width, height, 10, 1000);
    stroke(255, 150);
    sw = 10;
    strokeWeight(sw);
    class Quader{
        constructor ([x0,y0,x1,y1,x2,y2,x3,y3]) {
            this.pos = [[x0,y0],[x1,y1],[x2,y2],[x3,y3]]
            this._pos = [[x0,y0],[x1,y1],[x2,y2],[x3,y3]]
        }
        display(...theArgs) {
            if((this.pos.every(pointsLessThan, [width, height]))) {
                this.reset(this);
                return theArgs;
            }else if( theArgs.length == 4 &&
            theArgs[0].length == 2 &&
            theArgs[1].length == 2 &&
            theArgs[2].length == 2 &&
            theArgs[3].length == 2 ) {
                quad(...this.pos[0], ...this.pos[1], ...this.pos[2], ...this.pos[3]);
                return theArgs;
            } else {
                quad(...this.pos[0], ...this.pos[1], ...this.pos[2], ...this.pos[3]);
                console.log('args bad');
                return theArgs;
            }
        }
        update(...theArgs) {
            if( theArgs.length == 4 &&
            theArgs[0].length == 2 &&
            theArgs[1].length == 2 &&
            theArgs[2].length == 2 &&
            theArgs[3].length == 2 ) {
                this.pos.forEach(function(arrOf4Arr, i) { // 4 loops times
                    theArgs[i].forEach(function(num, j) { // 2 loops = 8 loops total
                        this[i] = [this[i][0]+num, this[i][1]+num];
                    }, this.pos)
                }, this);
                return this;
            }else {
                console.log(theArgs);
                throw 'input format error' 
            }
        }
        reset(self) {
            self.pos = self._pos;
        }
    }
    quader = new Quader([0, 0, 10, 0, 10, 10, 0, 10]);
    colorIt = (function iife() {
        var col, r = 0, g = 0, b = 1, a = 0;
        return function colorIn() {
            col = color(r,g,b,a);
            r = (r + 2) % width;
            g = (g + 1) % height;
            a = (a + 1) % 1000;
            return col;
        }
    })();
}

function draw() {
    fill(colorIt());
    strokeWeight(sw+=0.1);
    quader.update(...quader.display([0, 0], [1, 0], [1, 1], [0, 1]));
}

function pointsLessThan(arr) {
    if(arr[0] <= this[0] && arr[1] <= this[1]) {
        return false;
    }else {
        return true;
    }
};
