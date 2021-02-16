class Hammer {
  constructor(x, y, height,angle) {
    var options = {
        'restitution': 0.5,
        'friction': 1.0,
        'density': 2
    };

    this.body = Bodies.rectangle(x, y, 120, height, options);
    this.width = 120;
    this.height = height;
    Matter.Body.setAngle(this.body,angle);
    World.add(world, this.body);

  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    pos.x = mouseX;
    pos.y = mouseY;
    push();
    translate(pos.x, pos.y);
    stroke("white")
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
    
  
  }
};
