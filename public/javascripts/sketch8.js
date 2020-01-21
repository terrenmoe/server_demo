'use strict';
var a, cnv;

function setup() {
    cnv = createCanvas(innerWidth, innerHeight);
    class Shape {
        //Constructor
        constructor (radius) {
            this.radius = radius
            this.diameter = radius * 2
            this
        }  
        //Methods
        getArea () {
            return Math.PI * 2 * this.radius
        }  
        //Calling superclass methods
        expand (n) {
            return super.expand(n) * Math.PI
        }
        //Static methods
        static createFromPoints(type, ...points) {
            return new Shape(type, ...points)
        }
    }
    class Circle extends Shape {
        
    }
}

function draw() {
    
}
function* idMaker () {
    let id = 0
    while (true) { yield id++ }
}
for (let i of idMaker()) {
    i.next()
}

