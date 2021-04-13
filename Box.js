class Box {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.height = height;
  this.width =width;
  World.add (world, this.body);


  }

  display(){
    var position = this.body.position;
    var angle = this.body.angle;
    push();

    translate(position.x, position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke(0);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }

};
