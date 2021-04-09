class Bin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("Dustbin.png");

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER);
        image(this.image,900,500,80,110);
    }
}