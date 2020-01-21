'use strict';
var Bolt, bolt, cnv, colors, modLen, pointer;

function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.position(0, 0);
    colors = [];
    Bolt = function([x,y,distX,distY]=[]) {
        this.x = x;
        this.y = y;
        this.distX = distX;
        this.distY = distY;
    }
    Bolt.prototype.hurl = function () {
        try {
            xyCurse([xyCurse, this.x, this.y, this.distX, this.distY]);
        }catch (err) {
            console.error(err);
        }
    }
    Bolt.prototype.update = function () {
        this.x = mouseX;
        this.y = mouseY;
        this.distY = mC(-height/4, height,(n1,n2)=>!!(n1>n2));
    }
    bolt = new Bolt([mouseX,mouseY,width,height]);
    /*
    pointer = {
        touched:(touches.length !== 0)? true:false,
        x:[
            0:{
                a:touches[],
                p:touches[],
                v:touches[]
            },
            1:{
                a:touches[],
                p:touches[],
                v:touches[]
            },
            2:{
                a:touches[],
                p:touches[],
                v:touches[]
            }
        ],
        y:[
            0:{
                a:touches[],
                p:touches[],
                v:touches[]
            },
            1:{
                a:touches[],
                p:touches[],
                v:touches[]
            },
            2:{
                a:touches[],
                p:touches[],
                v:touches[]
            }
        ],
        second() {
            
        },
        third() {
            
        }
        
    }
    */
    noLoop();
    frameRate(10);
    stroke(127, 27);
    strokeWeight(1.4);
    for(let i = 25; i > 5; i-=1) {
        for(let j = 20; j > 0; j-=1) {
            let r1 = 10 + random(60),
            r2 = random(60) - 20;
            fill(200, 127);
            stroke(127, 27);
            arc(random(width), r1, r1, r2, j*r1 % QUARTER_PI,  j % TAU);
            fill(255, 200);
            noStroke();
            arc(random(width), r1, r1, r2, j*r2 % QUARTER_PI,  j % TAU);
        }
        colors.push(color(i * 3, i * 3, i * 8 + 50, 200));
        colors.push(color(i * 2, i * 2, i * 8 + 50, 200));   
    }
    modLen = (function() {
        let i = 0;
        return function(){
            return ++i % (colors.length - 1);
        }
    })();
    fill(30, 100, 60);
    rect(0, height-80, width, 80);
}

function draw() {
    //rect(0,0,innerWidth,innerHeight);
    //console.log(bolt(), modLen()); 
}

// this function fires with any click anywhere
function mousePressed() {
    stroke(colors[modLen()]);
    bolt.hurl();
/*
    console.log(
    ` frameCount=${frameCount}\n\
 bolt=${bolt}\n modLen=${modLen}\n qp=${qp}\n hp=${hp}`
    );
*/
}

function touchStarted() {
    
}

function mouseMoved() {
    bolt.update();
}

function touchMoved() {
    
}
function touchEnded() {
    
}

// this function fires only when cnv is clicked
function changeGrowth(_base, _scale, _limit) {
    var b = Number(_base);
    return function(scale=_scale, limit=_limit) {
        if(scale === 0){
            return b;
        }else if(scale > 0) {
            if(b <= limit) {
                return (b += scale);
            }else if(b > limit) {
                return b = _base;
            }
        }else if(scale < 0) {
            if(b >= limit) {
                return b += scale;
            }else if(b < limit) {
                return b = _base;
            }
        }
    }
}

// Recurse line rendering
function xyCurse([fn,_x,_y,distX,distY]=[]) {
    if((_x < distX && _x > 0) && (_y < distY && _y > 0)) {
        let mCed = function(n1, n2) {
            if(n1 > n2) {return true;}
            else {return false;}
        }
        // balanced x axis
        let a = mC(random(20), -8, mCed);
        // steady inc
        let b = mC(10, -4, mCed);
        push();
        translate(_x, _y)
        //translate(mC(10,-random(5)-5,mCed), mC(10,-random(2)-3,mCed));
        rotate(-(3/8) + random(PI/8));
        line(0, 0, a, b);
        pop();
        return fn([xyCurse,(a +_x),(b +_y), distX, distY]);
    }else {
        return;
    }
}

function mC(base=1, mean=1, trend=()=>true) {
    var r1, r2;
    while(true) {
        r1 = random();
        r2 = random();
    //  if trend resolves false loop again
        if(!(trend(r1, r2))) {
            continue;
    //   else return with monteCarlo
        }else {
            return (r1 * base) + mean;
        }
    }
}

