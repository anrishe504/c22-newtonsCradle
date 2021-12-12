class Ground {
    constructor(x,y,width,height){
      var options= {
        isStatic :true
      }
  
  
      this.body = Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body)
      this.w=width;
      this.h=height;
  
      
    }
    display(){
      var pos = this.body.position;
     
      push();
      translate(pos.x,pos.y)
      fill("lightGreen");
      rectMode(CENTER)
      rect(0,0,this.w,this.h)
      pop();
    }
    
  }  