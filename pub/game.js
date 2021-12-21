const max = 100
let things = []

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function mouseMoved() {
  store()
}

function keyPressed() {
  store()
}

function draw() {
  background(220)
  things.forEach(i => {
    circle(i[0],i[1], (50-i[2] || 0) + 10)
  })
}

function store() {
  things.push([mouseX,mouseY,dist(pmouseX,pmouseY,mouseX,mouseY)])
  
  if (things.length > max) {
    things.splice(0, 1)
  }
}
