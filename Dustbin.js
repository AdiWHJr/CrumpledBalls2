class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("DustbinImage.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill(200)
        stroke(200)
        rect(pos.x,pos.y,this.width,this.height)
    }
    imageDisplay(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        translate(1095, 310)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}