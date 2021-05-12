class Baseblock {
 constructor(x,y,width,height,static1)
 {    
   var options = {
       isStatic : static1,
       restitution : 0.5,
       density : 0.7,
       friction : 1.0
   }
   this.body =  Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.isstatic = static1
   World.add(world, this.body);
 }
 display(){
var pos = this.body.position;
var angle = this.body.angle;
push()
if(! this.isstatic)
 fill("blue")
translate(this.body.position.x, this.body.position.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop()
 //}
}
}