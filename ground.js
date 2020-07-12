class Ground {
    constructor() {
        var options = {
           isStatic : true
        }

        this.body = Bodies.rectangle(200,390,400,20, options);
        
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        fill(255);
        var t = this.body.position;
        rect(t.x, t.y, 400,20);
    }
}

