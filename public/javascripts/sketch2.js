'use strict';
var cnv, colors, diam, hp, modLen, pointer, qp;

function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.position(0, 0);
    colors = [
        color(150, 100, 255, 205), 
        color(150, 100, 200, 205), 
        color(150, 175, 200, 205),
        color(175, 150, 200, 205), 
        color(100, 150, 200, 205), 
        color(100, 150, 255, 205), 
        color(100, 175, 250, 205),
        color(100, 100, 250, 205),
        color(175, 100, 250, 205)
    ];
    modLen = function() {
return Number(frameCount % (colors.length - 1)); 
};
    diam = function(scale=2) {
 return Number(innerWidth) + scale * cos(frameCount);
};
    qp = changeGrowth(diam(), -QUARTER_PI, QUARTER_PI);
    hp = changeGrowth(HALF_PI, QUARTER_PI, diam());

    /*
     * pointer = {
     * touched:(touches.length !== 0)? true:false,
     * x:[
     * 0:{
     * a:touches[],
     * p:touches[],
     * v:touches[]
     * },
     * 1:{
     * a:touches[],
     * p:touches[],
     * v:touches[]
     * },
     * 2:{
     * a:touches[],
     * p:touches[],
     * v:touches[]
     * }
     * ],
     * y:[
     * 0:{
     * a:touches[],
     * p:touches[],
     * v:touches[]
     * },
     * 1:{
     * a:touches[],
     * p:touches[],
     * v:touches[]
     * },
     * 2:{
     * a:touches[],
     * p:touches[],
     * v:touches[]
     * }
     * ],
     * second() {
     *
     * },
     * third() {
     *
     * }
     *
     * }
     */
    frameRate(10);
    fill(0,0,0,100);
    strokeWeight(0.5);
}

function draw() {
    stroke(colors[modLen()]);
    // rect(0,0,innerWidth,innerHeight);
    try {
        xyCurse([
xyCurse,
mouseX,
mouseY
]);
    } catch (err) {}
    // console.log(diam(), modLen()); 
}

// this function fires with any click anywhere
function mousePressed() {
    clear();

/*
 * console.log(
 * ` frameCount=${frameCount}\n\
 * diam=${diam}\n modLen=${modLen}\n qp=${qp}\n hp=${hp}`
 * );
 */
}

function touchStarted() {
    
}    

function touchMoved() {
    redraw();
}

function touchEnded() {
    
}

// this function fires only when cnv is clicked
function changeGrowth(_base, _scale, _limit) {
    var b = Number(_base);
    return function(scale=_scale, limit=_limit) {
        if (scale === 0) {
            return b;
        } else if (scale > 0) {
            if (b <= limit) {
               return b += scale;
            } else if (b > limit) {
               return b = _base;
            }
        } else if (scale < 0) {
            if (b >= limit) {
               return b += scale;
            } else if (b < limit) {
               return b = _base;
            }
        }
    };
}

// Recurse line rendering
function xyCurse([
fn,
_x,
_y,
done
]=[]) {
    if (_x < diam() && _x > 0) {
        const x = abs(_x) + mC(15, -mouseX/2,function(n1,n2) {
if (n1>=n2) {
return true;
} return false;
});
        const y = abs(_y) + mC(21, -mouseY/2,function(n1,n2) {
if (n1>n2) {
 return true;
} return false; 
});
        line(_x, _y, x, y);
        return fn([
xyCurse,
x,
y
]);
    }
        
    
}

function mC(base=1, mean=1, trend=() => true) {
    var r1, r2;
    while (true) {
        r1 = random() * base;
        r2 = random() * base;
        if (!trend(r1, r2)) {
            continue;
        } else {
            return r1 + mean;
        }
    }
}

