class Stone{
    constructor(x,y,radius){
        var options={
            'isStatic': false,
            'restitution':0,
            'friction':1,
            'density':1.2,
    }
        this.body = Bodies.circle(x,y,radius,options);
        this.body.x=x;
        this.body.y=y;
        this.image=loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        image(this.image, 0, 0, this.width, this.height);
        }
    }
                   