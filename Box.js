class Box {
  constructor(x, y, width, height) {
      var options = {
          restitution: 0.1,
          friction: 0.01,
          density: 0.02,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
  }

  display(){
    if(this.body.speed < 3){
      var pos = this.body.position;
      strokeWeight(2);
      fill("gray");
      rect(pos.x, pos.y, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }
   }

   score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
   }
}

