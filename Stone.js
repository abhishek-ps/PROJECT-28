class Stone{
    constructor(x,y,radius){
        var options={
            'isStatic': false,
            'restitution':0,
            'friction':1,
            'density':1.2,
    }
        this.body = Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius = radius;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        image(this.image, this.x, this.y, this.radius, this.radius);
        }
    }
                   
