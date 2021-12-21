let pos = {
	x: 200,
	y: 200
}
let w = 40
let h = 40
let animIndex = 0
let anim = []
let animFrame = {
	x: 0,
	y: 0,

	r: 0,

	sz: 1
}
let speed = 0.4

function setup() {
	createCanvas(400, 400)
	rectMode(CENTER)
	angleMode(DEGREES)
	frameRate(60)

	setInterval(update, 50)
}

function update() {

}

function draw() {
	background(220)

	push()
	translate(pos.x, pos.y)

	rect(0, 0, w, h);
	pop()
}
