class Shape{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea(){
        return this.length*this.breadth;
    }
    calculatePerimeter(){
        return (this.length+this.breadth)*2;
    }
}
class Circle extends Shape{
    constructor(radius){
        super(radius);
    }
    calculateArea(){
        return Math.pow(this.length,2)*3.14;
    }
    calculatePerimeter(){
        return this.length*2*3.14;
    }
}


class Rectangle extends Shape{
    constructor(length,breadth){
        super(length,breadth);
    }
}

class Triangle extends Shape{
    constructor(height,base,side1,side2,side3){
        super(height,base);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateArea(){
        return (this.length*this.breadth)/2;
    }
    calculatePerimeter(){
        return this.side1+this.side2+this.side3;
    }
}



const circle = new Circle(5);
console.log(`Circle - Area:${circle.calculateArea()}, Perimeter:${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4,6);
console.log(`Rectangle - Area:${rectangle.calculateArea()}, Perimeter:${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8,6,5,7,10);
console.log(`Triangle - Area:${triangle.calculateArea()}, Perimeter:${triangle.calculatePerimeter()}`);
