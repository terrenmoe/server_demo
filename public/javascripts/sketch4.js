'use strict';
var cnv, colors, colorSet, pointArr, doubler, halfer, sqer, sqrter, moder;

function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.position(200, 0);
    pointArr = [
        [],
        [],
        [],
        [],
        [],
        []
    ];
    colors = [
        color('#aaa29740'), // mud 
        color('#adc5d140'), // rain
        color('#d5cdc240'), // warm grey
        color('#4a423740'), // mocha
        color('#e7d9cc0A')  // desert
    ];
    for(let a = 3, b = 4, c = ((a**2) + (b**2))**(1/2); a < 900; a*=2,b*=2,c=((a**2)+(b**2))**(1/2)) {
        pointArr[0].push(a);
        pointArr[1].push(a);
        pointArr[2].push(b);
        pointArr[3].push(b);
        pointArr[4].push(c);
        pointArr[5].push(c);
        
    }
    
    frameRate(10);
    stroke(255,255,255,100);
    fill(255,255,255,100);
    strokeWeight(2);
}

function draw() {
    colorSet(colors);
    pointArr = liner(arcer(arcer(pointArr)));
}
// changing colors
colorSet = (function () {
    var len, idx = 0;
    return function colorClose(arr) {
        len = arr.length - 1;
        if(++idx <= len) {
            background(arr[len]);
            fill(arr[idx]);
            stroke(arr[len-idx]);
        }else {idx = 0;}
        return arr;
    }    
})(); 
// drawing funs
function liner(arr) {
    var x1,y1,x2,y2; 
    x1=arr[0],
    y1=arr[1],
    x2=arr[2],
    y2=arr[3];
    for(let i = 0; i < x1.length; i++) {
        line(x1[i], y1[i], x2[i], y2[i]);
    }
    return arr;
}

function arcer(arr) {
    var x1,y1,x2,y2; 
    x1=arr[0],
    y1=arr[1],
    x2=arr[2],
    y2=arr[3];
    for(let i = 0; i < x1.length; i++) {
        arc(x1[i], y1[i], x2[i], y2[i], QUARTER_PI * i, TAU);
    }
    return arr;
}

function trier(arr) {
    var x1,y1,x2,y2,x3,y3; 
    x1=arr[0],
    y1=arr[1],
    x2=arr[2],
    y2=arr[3],
    x3=arr[4],
    y3=arr[5];
    for(let i = 0; i < x1.length; i++) {
        triangle(x1[i],y1[i],x2[i],y2[i],x3[i],y3[i]);
    }
    return arr;
}

// mutatations

doubler = (function () {
    var temp = [];
    return function (arr) {
        temp.length = 0;
        for(let i of arr) temp.push(i.map(doubleMap));
        return temp;
    }
})();

halfer = (function () {
    var temp = [];
    return function (arr) {
        temp.length = 0;
        for(let i of arr) temp.push(i.map(halfMap));
        return temp;
    }
})();

sqer = (function () {
    var temp = [];
    return function (arr) {
        temp.length = 0;
        for(let i of arr) temp.push(i.map(sq));
        return temp;
    }
})();

sqrter = (function () {
    var temp = [];
    return function (arr) {
        temp.length = 0;
        for(let i of arr) temp.push(i.map(sqrt));
        return temp;
    }
})();

moder = (function () {
    var temp = [];
    return function (arr) {
        temp.length = 0;
        for(let i of arr) temp.push(i.map(modMap));
        return temp;
    }
})();
// map calls
function doubleMap(val) {
    val = val * 2 + 1e-10;
    return val;
}

function halfMap(val) {
    val = val / 2;
    return val;
}

function modMap(val) {
    val = val % 102;
    return val;
}

