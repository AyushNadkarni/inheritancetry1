class Paper{

    constructor(x,y){

 var options= {
    isStatic:false,
    restitution:0.5,
    friction:0.5,
    density:2.0
 
 }


 this.body = Bodies.circle(x,y,20,options);
 World.add(world,this.body);
this.image = loadImage("sprites/paper.png")

 World.add(world,this.body);

 //calling the function
keyPressed();

}

display(){
 
  imageMode(CENTER)
  
  image(this.image,this.body.position.x,this.body.position.y,60,60)
}


}



