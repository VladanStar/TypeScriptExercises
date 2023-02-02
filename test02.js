"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        let area = Math.PI * this.radius * this.radius;
        console.log(`Površina kruga: ${area}`);
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        let area = this.width * this.height;
        console.log(`Površina pravougaonika: ${area}`);
    }
}
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        let area = 0.5 * this.base * this.height;
        console.log(`Površina trougla: ${area}`);
    }
}
let circle = new Circle(5);
circle.calculateArea();
let rectangle = new Rectangle(10, 5);
rectangle.calculateArea();
let triangle = new Triangle(10, 5);
triangle.calculateArea();
