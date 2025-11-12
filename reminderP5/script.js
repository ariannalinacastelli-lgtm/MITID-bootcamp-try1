// Your variables go here

let synth;


function preload() {
    // Load ressources before setup
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
    //frameRate(1);
    //create a synthesizer
    synth = new p5.MonoSynth();
}

function draw() {
    // Code that runs repeatedly code here
   // background(200);
   fill("#34aeeb");
    
    triangle(mouseX, mouseY, mouseX-3, mouseY+3, mouseX+3, mouseY+3);
    circle(mouseX, mouseY+5, 7);
}

function mousePressed() {
    let c = random(0, 3000);
   synth.play(c, 0.5, 0, 0.2);
   
   
 


 // play a not ewhen the mouse is pressed
//300 is frequency, 0.5 velocity, 0 time from now, 0.2 duration of the note

 //synth.play(300, 0.5, 0, 0.2);

}