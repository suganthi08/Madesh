class Basket {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.basketImage=loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      translate(pos.x,pos.y)
      fill("red");
      image( this.basketImage,30,0, 100, this.height);
    }
  };
