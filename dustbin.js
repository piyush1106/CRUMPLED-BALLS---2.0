class dustbin{
     constructor(x,y){
         this.image=loadImage("dustbingreen.png")
         this.x=x
         this.y=y
         this.w=200
         this.h=100
         this.t=20
         this.angle=0
         this.bb=Bodies.rectangle(x,y,this.w,this.t,{isStatic:true})
         this.lb=Bodies.rectangle(x-this.w/2,y-this.h/2,this.t,this.h,{isStatic:true})
         this.rb=Bodies.rectangle(x+this.w/2,y-this.h/2,this.t,this.h,{isStatic:true})
         Body.setAngle(this.lb,this.angle)
         Body.setAngle(this.rb,this.angle)
          World.add(world,this.bb)
          World.add(world,this.rb)
          World.add(world,this.lb)
     }
     display(){
         push ()
         translate (this.lb.position.x,this.lb.position.y)
         angleMode(RADIANS)
         rotate (this.angle)
         //rectMode(CENTER)
         //rect(0,0,this.t,this.h)
         pop ()
         push ()
         translate (this.bb.position.x,this.bb.position.y)
         angleMode(RADIANS)
         rotate (this.angle)
         rectMode(CENTER)
         imageMode (CENTER)
         image (this.image,0,-this.h/2,this.w,this.h)
         //rect(0,0,this.w,this.t)
         pop ()
         push ()
         translate (this.rb.position.x,this.rb.position.y)
         angleMode(RADIANS)
         rotate (this.angle)
         rectMode(CENTER)
         //rect(0,0,this.t,this.h)
         pop ()
     }

     





}