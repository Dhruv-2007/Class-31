class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.line = [];
    this.Visiblity = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x >= 250 && this.body.velocity.x > 4){
    var line2 = [this.body.position.x,this.body.position.y];

    this.line.push(line2);
    }

    for(var i = 0; i < this.line.length; i += 2){
      push();
      this.Visiblity = this.Visiblity - .5;
      tint(255,this.Visiblity);
      image(this.smoke,this.line[i][0],this.line[i][1]);
      pop();
    }

    super.display();
  }
}
