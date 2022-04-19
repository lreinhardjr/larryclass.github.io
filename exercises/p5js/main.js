wave = 0
wave2 = 90
redWave   = 0
greenWave = 0
blueWave  = 0

function distance(aX, aY, bX, bY) {
  return Math.sqrt(
    ((aX - bX) ** 2) + ((aY - bY) ** 2)
  )
}




function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  blendMode(SCREEN)
}


function draw() {
  
  clear()
  fullscreen()
  
  rectMode(CENTER)
  
  
    let r1 = color("#FF004D")
    let r2 = color("#FF4202")
    let g1 = color("#00FF6A")
    let g2 = color("#55FF00")
    let b1 = color("#5500FF")
    let b2 = color("#1500FF")

    let colors = [
      lerpColor(r1, r2, abs(sin(wave2))),
      lerpColor(g1, g2, abs(sin(wave2 + 45))),
      lerpColor(b1, b2, abs(sin(wave2 + 90)))
    ]
    redWave   += 0.5 // 5
    greenWave += 1   // 5
    blueWave  += 2   // 5
    wave2 += 2
  
  let bg1 = color("#280060") // purple
  let bg2 = color("#001060") // blue 001860
  
  background(
    lerpColor(
      bg1,
      bg2,
      abs(sin(wave))
    )
  );
  wave += 0.5
  
  
  let margin = 0;
  
  let gridWidth = 30
  let gridHeight = 30
  let cellSize = (width - (margin * 2)) / (gridWidth - 1)  
  
  randomSeed(222)
  
  for (let z = 0; z < 3; z++) {
    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {

        let posX = (margin) + x * cellSize
        let posY = (margin) + y * cellSize

        let d = distance(posX, posY, mouseX, mouseY)

        let size = map(d, 0, 240, 48, 4, true)
        
        let ro = map(
          distance(posX, posY, mouseX, mouseY),
          0, 120, 120, 0, true
        )
        
        stroke(colors[z])

        strokeWeight(size) // random(1, 4)
        point(
          posX + randomGaussian(0, ro),
          posY + randomGaussian(0, ro),
        )

      }
    }
  }
}
