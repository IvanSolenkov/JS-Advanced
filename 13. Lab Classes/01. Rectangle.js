class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    calcArea(){
        return this.height * this.width;

    }
}
Rectangle.prototype.getDiagonal = function () {
return Math.sqrt(this.height ** 2 + this.width ** 2);
};
const rect = new Rectangle(5, 4, 'yellow');
console.log(rect.calcArea());
console.log(rect.color);
console.log(rect.getDiagonal());
