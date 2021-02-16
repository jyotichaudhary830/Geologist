class Rubber{
    constructor(x, y,r) {
      var options = {
          'restitution': 0.3,
          'friction': 5.0,
          'density': 1
      };
      this.y = y;
      this.x = x;
      this.r = r;
      this.body = Bodies.circle(x, y, (this.r-20)/2, options);
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      stroke("white")
      fill("blue");
      ellipse(0, 0, this.r , this.r);
      pop();
    }
  };
  