class Box{
    constructor(x,y,width,height){
        var option={
            
                isStatic:true
            
            }
       

    this.body=Bodies.rectangle(x,y,width,height,option)
   this.w=width
   this.height=height
    World.add(world,this.body)
}
    display(){
    rectMode(CENTER)
   fill("white")
    rect(this.body.position.x,this.body.position.y,this.w,this.height)
   
}
}