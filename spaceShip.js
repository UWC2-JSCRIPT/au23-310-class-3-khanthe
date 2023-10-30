// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class Spaceship {
    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate() {
        const { name, topSpeed } = this;
        console.log(`${name} moving to warp ${topSpeed}`);
    };
};

const voyager = new Spaceship("Voyager", 9);
const defiant = new Spaceship("Defiant", 7);


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

voyager.accelerate();
defiant.accelerate();