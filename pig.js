class Pig{
    constructor(x,y){
        var options={
            'friction':1,
            'restitution' :0,
            'density':1
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.width= 50;
        this.height = 50;
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }

}