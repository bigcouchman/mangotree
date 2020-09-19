class Slingshot{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.slingShot=Constraint.create(options)
		World.add(world,this.slingShot)
	}

	attach(body){
		this.slingShot.bodyA=body;
	}

	fly()
	{
		this.slingShot.bodyA=null;
	}

	display()
	{
		if(this.slingShot.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
