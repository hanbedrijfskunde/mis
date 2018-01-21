let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];
let plinkos = [];
let bounds = [];
let cols = 15;
let rows = 8;

function setup() {
	let canvas = createCanvas(600, 500);
  canvas.parent('sketch-holder');
	engine = Engine.create();
	world = engine.world;
  //world.gravity.y = 1;
  newParticle();
  let spacing = width / cols;
  for (i = 0; i < rows; i++) {
    for (j = 0; j < cols + 1; j++) {
      var x = j * spacing;
      if (i % 2 == 0) {
        x = spacing /2 + j * spacing;
      }
      var y = spacing + i * spacing;
      let p = new Plinko(x, y, 10);
      plinkos.push(p);
    }
  }
  var b = new Boundary(width/2, height + 50, width, 100)
  bounds.push(b);
  for (var i = 0; i < cols + 1; i++) {
    var x = i * spacing;
    var h = 120;
    var w = 1;
    var y = height - h / 2;
    var b = new Boundary(x, y, w, h);
    bounds.push(b);
  }
}

function newParticle() {
	let p = new Particle(300, 0, 7);
	particles.push(p);
}

function draw() {
	if (frameCount % 60 == 0) {
		newParticle();
	}
  background(51);
	Engine.update(engine, 1000 / 60);
	for (var i = 0; i < particles.length; i++) {
		particles[i].show();
    if (particles[i].isOffScreen()) {
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
	}
  for (var i = 0; i < plinkos.length; i++) {
		plinkos[i].show();
	}
  for (var i = 0; i < bounds.length; i++) {
		bounds[i].show();
	}
}
