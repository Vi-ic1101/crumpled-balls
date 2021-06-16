class Paper{
	constructor(x,y,r){
		var options={
			'restitution':0.3,
			'friction':0,
			'density':1.2
		}

	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")

		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
		
	//	Matter.Body.applyforce(this.body,this.body.position,{x:130,y:-145})

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x,pos.y);
			imageMode(CENTER)
			
			//draw the ellipse here to display the rubber ball

			image(this.image,0,0,100,100)
			//ellipse(0,0,this.x,this.y)
			pop();
	}

}
