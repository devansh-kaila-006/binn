class Ball{
    constructor(x,y,radius){

      var options = {
          isStatic:false,
          restitution:0.3,
          friction:1.5,
          density:5
          
      }

      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);

    }

    display(){
      var pos =this.body.position;
      fill("yellow");
      ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
      
    }  

    
    
}