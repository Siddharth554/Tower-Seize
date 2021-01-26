class Polygon {



  constructor(x, y, w, h) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.image = loadImage("polygon.png")
  };



  display() {
    var pos = this.body.position
    push()
    var angle = this.body.angle;
    imageMode(CENTER)
    rotate(angle);
    translate(pos.x, pos.y)
    image(this.image, 0, 0, this.w, this.h)

    pop()
  }


}