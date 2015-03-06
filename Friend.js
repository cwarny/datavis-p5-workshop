var Friend = function(name, id, friends, x, y, theta) {
	this.d = 5;
	this.name = name;
	this.id = id;
	this.theta = theta;
	this.name = name;
	this.pos = new p5.Vector(x, y, 0);
	this.mutualFriends = friends;
	this.friends = [];
};

Friend.prototype.render = function() {
	stroke(0);
	fill(255);
	ellipse(this.pos.x, this.pos.y, this.d, this.d);
	if (this.mouseOver()) {
		stroke(253, 141, 60);
		this.drawName();
		stroke(255, 255, 178);
		for (var i=0; i<this.friends.length; i++) {
			var f = this.friends[i];
			line(this.pos.x, this.pos.y, f.pos.x, f.pos.y);
			f.drawName();
		}
	}
};

Friend.prototype.mouseOver = function() {
	var mouse = new p5.Vector(mouseX, mouseY, 0);
	return this.pos.dist(mouse) <= this.d / 2;
};

Friend.prototype.drawName = function() {
	push();
		translate(this.pos.x, this.pos.y);
		rotate(this.theta);
		text(this.name, 5, 0);
	pop();
};

Friend.prototype.connectToFriends = function() {
	for (var i =0; i<this.mutualFriends.length; i++) {
		var fo = allfriends[this.mutualFriends[i].id];
		if (fo) this.friends.push(fo);
	}
	delete this.mutualFriends;
};