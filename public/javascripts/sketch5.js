'use strict';
var cnv, mid, Opt, opts, orders;

function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    noFill();
    colorMode(RGB, 255, 255, 255, 20);
    background(255);
    strokeWeight(4);
    stroke(255, 0, 10, 1);
    noLoop();
    mid = [(width/2), (height/2)];
    opts = [];
    orders = ['trs', 'tsr', 'rts', 'rst', 'srt', 'str'];
    class Opt {
        //Constructor
        constructor (order, rArgs, sArgs, tArgs, cb) {
            this.order = order  || 'trs'
            this.rArgs = rArgs  || [0]
            this.sArgs = sArgs  || [1,1]
            this.tArgs = tArgs  || [0,0]
            this.cb = cb  || function() {}
        }
        //Static methods
        static createOpt (order, rArgs, sArgs, tArgs, cb) {
            return new Opt(order, rArgs, sArgs, tArgs, cb)
        }
        static populate (orderList, rArgs, sArgs, tArgs, cb) {
            let arr = [];
            for(let order of orderList) {
                arr.push(Opt.createOpt(order, rArgs, sArgs, tArgs, cb));
            }
            return arr;
        }
    }
    for(let i = -2; i < 2; i += 0.2) {
        if(i == 0) {
            continue;
        }else if(i > -1 && i < 1) {
            opts.push(...(Opt.populate(orders, qp(i), moreOrLess(i*10), catMouse(), circler)));
            continue;
        }else {
            opts.push(...(Opt.populate(orders, qp(i), lessIsMore(i*5), moreOrLess(i*5), triangler)));
        }
    }
    
}

function draw() {
    background(0,127,127,5);
    for(let op of opts) {
        op.tArgs = catMouse();
    }
    opts.forEach(neo);
}

function neo({order, sArgs, tArgs, rArgs, cb}={}) {
    push();
    translate(...mid);
    switch(order) {
        case 'trs':
            translate(...tArgs);
            rotate(...rArgs);
            scale(...sArgs);
            break;
        case 'tsr':
            break;
            translate(...tArgs);
            scale(...sArgs);
            rotate(...rArgs);
        case 'rts':
            break;
            rotate(...rArgs);
            translate(...tArgs);
            scale(...sArgs);
        case 'rst':
            break;
            rotate(...rArgs);
            scale(...sArgs);
            translate(...tArgs);
        case 'srt':
            break;
            scale(...sArgs);
            rotate(...rArgs);
            translate(...tArgs);
        case 'str':
            break;
            scale(...sArgs);
            translate(...tArgs);
            rotate(...rArgs);
        default:
            break;
    }
    cb();
    pop();
}
// translation arrayers
function catMouse() {
    return [mouseX - mid[0], mouseY - mid[1]];
}
// rotation arrayers
function qp(val) {
    return [val * QUARTER_PI];
}

function hp(val) {
    return [val * HALF_PI];
}
// scaling arrayers
function moreOrLess(val) {
    return [val, -(val)];
}

function lessIsMore(val) {
    return [-(val), val];
}
// cb's
function circler() {
    ellipse(0, 0, 30, 30);
}

function boxer() {
    rect(0, 0, 30, 30);
}

function triangler() {
    triangle(-15, 0, 15, -15, 0, 15);
}
// events handles
function mouseClicked() {
    redraw();
}

