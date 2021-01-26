class Box{

 constructor(x,y,w,h){

  var options = {
    restitution:0.8,
    friction:1.0,
    density:1.0
}
  this.body=Bodies.rectangle(x,y,w,h,options);
  World.add(world,this.body);
  this.w=w;
  this.h=h;
   
 }




display()
{
  var pos=this.body.position;
   push()
    fill("blue")
   rect(pos.x,pos.y,this.w,this.h)
   
  pop()    
}   


}