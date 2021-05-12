class Rope
{
   constructor (body1,body2)
   {
    var options =
    {
       bodyA: body1,
       bodyB: body2,
       pointB:{x:50, y:0},
       stiffness: 0.1,
       length: 300

    }
    this.slingshot = Constraint.create (options);
    World.add(world,this.slingshot);
   }
   display(){
    var pointA= this.slingshot.bodyA.position;
    var pointB = this.slingshot.bodyB.position;

    var Anchor1X=pointA.x
    var Anchor1Y=pointA.y

    var Anchor2X=pointB.x  + 50
    var Anchor2Y=pointB.y

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
   }
}