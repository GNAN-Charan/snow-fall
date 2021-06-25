class Particle {
    constructor(x, y ,r) {

        var options ={
            restitution:0.4
        }
        this.image = loadImage("snow5.webp")
        this.Visibility = 255
        this.r=r;
        this.body = Bodies.rectangle(x, y, 20 ,20 ,options);
        World.add(world, this.body);
        //Matter.Body.setVelocity(this.body, 3);

    }
    display() 
    {
            push();
            imageMode(CENTER)
            image(this.image, this.body.position.x, this.body.position.y,20,20);
            pop();
    }
}