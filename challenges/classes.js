// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerOne{
    constructor (attr){
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    };
    volume(){
        return this.length * this.width * this.height;
    };
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    };
};

const cuboidOne = new CuboidMakerOne({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboidOne.volume()); // 100
// console.log(cuboidOne.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class ConeMaker extends CuboidMakerOne{
    constructor(attr){
        super(attr);
        this.slant = attr.slant;
        this.radius = attr.radius;
        this.pie = attr.pie;
        this.squared = this.radius * this.radius;
    };
    volume(){
        const vol = (this.pie * this.squared * this.height) / 3;
        return vol.toFixed(2);
    };
    surfaceArea(){
        const sur = (this.pie * this.radius * this.slant) + (this.pie * this.squared);
        return sur.toFixed(2);
    };
};

const coneOne = new ConeMaker({
    length: 0,
    width: 0,
    height: 7,
    slant: 8,
    radius: 4,
    pie: 3.14
});

console.log(coneOne.volume());
console.log(coneOne.surfaceArea());