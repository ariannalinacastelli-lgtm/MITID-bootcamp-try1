// Your variables go here

let video; 
let bodyPose;
let poses = [];

let mainservo;
let longarmservo;
let shortarmservo;

function preload() {
    // Load ressources before setup

bodyPose = ml5.bodyPose();

loadBoard();

}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    video = createCapture(VIDEO);
    video.hide();

    bodyPose.detectStart(video, function(results) {
        poses = results;
    });


mainservo = new five.Servo(3);
longarmservo = new five.Servo(5);
shortarmservo = new five.Servo(6);

}

function draw() {
    // Code that runs repeatedly code here
    //background(200);
    image(video, 0, 0);

    if(poses.length > 0){

        let nose = poses[0].nose.y;
        let anglenose = map(nose, 0, 500, 0, 20);
        mainservo.to(anglenose);

        let lwrist = poses[0].left_wrist.y;
        let langle = map(lwrist, 0, 500, 0, 180);
        longarmservo.to(langle);

        let rwrist = poses[0].right_wrist.y;
        let rangle = map(rwrist, 0, 500, 0, 180);
        shortarmservo.to(rangle);
    }

}