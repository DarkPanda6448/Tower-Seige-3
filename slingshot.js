class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }        
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.visibility = 255;

        World.add(world, this.sling);
    }
    
    score(){
        if(this.visibility<0 && this.visibility >-105){
            score++;
        }
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            fill("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
