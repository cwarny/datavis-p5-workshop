var allfriends = {};
var radius = 250;

function setup() {
	createCanvas(displayWidth, displayHeight);
	loadJSON("data.json", setupFriends);
};

function draw() {
	background(0);
	for (var f in allfriends) {
		allfriends[f].render();
	}
};

function setupFriends(data) {
	var friends = data.friends.data;
	for (var i=0; i<friends.length; i++) {
		var name = friends[i].name;
		var id = friends[i].id;
		var mutualfriends = [];
		if (friends[i].hasOwnProperty("mutualfriends")) {
			mutualfriends = friends[i].mutualfriends.data;
		}
		var theta = map(i, 0, friends.length, 0, TWO_PI);
		var x = width / 2 + cos(theta) * radius;
		var y = height / 2 + sin(theta) * radius;
		var f = new Friend(name, id, mutualfriends, x, y, theta);
		allfriends[id] = f;
	}
};