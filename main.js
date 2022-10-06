function preload() {
}

function setup() {
    canvas = createCanvas(1700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 570, 40, 520, 380);
  
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(560, 50, 80);
  
    circle(560, 430, 80);
  
    circle(1100, 50, 80);
  
    circle(1100, 430, 80);
  
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(600, 40, 460, 20);
  
    rect(600, 420, 460, 20);
  
    rect(550, 90, 20, 300);
  
    rect(1090, 90, 20, 300);
  }
  
function take_snapshot(){    
    save('student_name.png');
  }