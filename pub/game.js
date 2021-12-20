let things = [];

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220)
  
  things.push([mouseX,mouseY])
  
  if (things.length > 40) {
    things.splice(0, 1)
  }
  
  things.forEach(i => {
    circle(i[0],i[1], 30)
  })
}
