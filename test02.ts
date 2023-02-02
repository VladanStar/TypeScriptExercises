interface Shape {
  calculateArea(): void;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): void {
    let area = Math.PI * this.radius * this.radius;
    console.log(`Površina kruga: ${area}`);
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): void {
    let area = this.width * this.height;
    console.log(`Površina pravougaonika: ${area}`);
  }
}

class Triangle implements Shape {
  base: number;
  height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  calculateArea(): void {
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


