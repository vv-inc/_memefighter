const max = 200
let things = []

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function mouseMoved() {
  store()
}

function draw() {
  background(220)
  things.forEach(i => {
    circle(i[0], i[1], i[2]*2)
  })

  if (keyIsPressed) {
    store()
  }
}

function store() {
  things.push([mouseX,mouseY,dist(pmouseX,pmouseY,mouseX,mouseY)])
  
  if (things.length > max) {
    things.splice(0, 1)
  }

  things.forEach(i => {
    i[2] += dist(pmouseX, pmouseY, mouseX, mouseY) * 0.1;
  })
}
