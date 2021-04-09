class Paper{
    constructor(x,y){
        var options={
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,50,options);
        this.x=x;
        this.y=y;
        this.image=loadImage("Crumpled Paper.png");
         
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("white");
        ellipse(pos.x,pos.y,50);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}