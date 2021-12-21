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
let violence = 16
let mcSpeed = 0.4

function setup() {
	createCanvas(400, 400)
	rectMode(CENTER)
	angleMode(DEGREES)
	frameRate(60)

	anim = []
	for (let i = 0; i < 16; i ++) {
		anim.push({
			x: random(-violence, violence),
			y: random(-violence, violence),

			r: random(-violence, violence),

			sz: map(i, 0, 16, 0.9, 1.1)
		})
	}

	setInterval(update, 50)
}

function update() {
	animIndex ++
	animIndex = animIndex % anim.length
	animFrame.x = lerp(animFrame.x, anim[animIndex].x, mcSpeed)
	animFrame.y = lerp(animFrame.y, anim[animIndex].y, mcSpeed)
	animFrame.r = lerp(animFrame.r, anim[animIndex].r, mcSpeed)
	animFrame.sz = lerp(animFrame.sz, anim[animIndex].sz, mcSpeed)
}

function draw() {
	background(220)

	push()
	translate(pos.x + animFrame.x, pos.y + animFrame.y)
	rotate(animFrame.r)
	scale(animFrame.sz)

	rect(0, 0, w, h);
	pop()
}
