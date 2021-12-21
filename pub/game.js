let shakeFrame = 0
let shake = [
  [-5, 6, 2],
  [-2, -6, 1],
  [6, 2, 0],
  [4, 3, 3],
  [2, -6, 1]
]
let betweens = 0.25

function setup() {
  createCanvas(400, 400)
  rectMode(CENTER)
  angleMode(DEGREES)
  frameRate(60)
}

function draw() {
  background(220)
  translate(width / 2, height / 2);

  if (shakeFrame != floor(shakeFrame)) {
    nextFrame = shakeFrame + betweens
    if (nextFrame > shake.length) {
      nextFrame = 0
    }
    let r = lerp(shake[floor(shakeFrame)][0], shake[floor(nextFrame)][0], 0.5)
    let x = lerp(shake[floor(shakeFrame)][1], shake[floor(nextFrame)][1], 0.5)
    let y = lerp(shake[floor(shakeFrame)][2], shake[floor(nextFrame)][2], 0.5)
    rotate(r)
    rect(x, y, 50, 50)
  } else {
    rotate(shake[floor(shakeFrame)][0])
    rect(shake[floor(shakeFrame)][1], shake[floor(shakeFrame)][2], 50, 50)
  }

  shakeFrame += betweens
  if (shakeFrame+1 > shake.length) {
    shakeFrame = 0
  }
}
