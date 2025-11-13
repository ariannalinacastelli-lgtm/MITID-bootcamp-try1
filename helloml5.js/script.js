// Your variables go here

let video;

let bodyPose;

let poses = [];


function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose();

}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
frameRate(15);
    video = createCapture(VIDEO);
    video.hide();

    bodyPose.detectStart(video, function(results){

     poses = results;
        
    })
}

function draw() {
    // Code that runs repeatedly code here
   // background(200);
   image(video, 0, 0);

   //make sure to detect at least one pose
    if(poses.length > 0) {

        let right_eye = poses[0].right_eye;
        console.log(right_eye);
        fill("#4A97E9");
        stroke("#4A97E9");
        triangle(right_eye.x, right_eye.y +15, right_eye.x -3, right_eye.y +18, right_eye.x +3, right_eye.y +18);
        circle(right_eye.x, right_eye.y +20, 7);
        
        triangle(right_eye.x - 15, right_eye.y +30, right_eye.x -18, right_eye.y +33, right_eye.x -12, right_eye.y +33);
        circle(right_eye.x -15, right_eye.y +35, 7);

        let left_eye = poses[0].left_eye;
        console.log(left_eye);

        triangle(left_eye.x, left_eye.y +15, left_eye.x -3, left_eye.y +18, left_eye.x +3, left_eye.y +18);
        circle(left_eye.x, left_eye.y +20, 7);

        triangle(left_eye.x +15, left_eye.y +30, left_eye.x +12, left_eye.y +33, left_eye.x +18, left_eye.y +33);
        circle(left_eye.x +15, left_eye.y +35, 7);

  let nose = poses[0].nose;
        console.log(nose); 

         beginShape();

        // Add vertices.
        vertex(nose.x, nose.y);
        vertex(nose.x - 5, nose.y +10);
        vertex(nose.x -20, nose.y +5);
        vertex(nose.x -10, nose.y +15);
        vertex(nose.x -20, nose.y +30);
        vertex(nose.x, nose.y +20);
        vertex(nose.x +20, nose.y+30);
        vertex(nose.x +10, nose.y +15);
        vertex(nose.x+20, nose.y+5);
        vertex(nose.x+5, nose.y+10);


        // Stop drawing the shape.
        endShape(CLOSE);




      


       /* let nose = poses[0].nose;
        console.log(nose); 
        fill(255, 0, 0);
        stroke("#000000");
        strokeWeight(1);
        circle(nose.x, nose.y, 20);  

 

        let right_eye = poses[0].right_eye;
        console.log(right_eye);
        noFill();
        stroke(0, 0, 255);
        strokeWeight(10);
         
        
        let left_eye = poses[0].left_eye;
        console.log(left_eye);
        let distance = dist(left_eye.x, left_eye.y, right_eye.x, right_eye.y);
        console.log(distance);
        circle(left_eye.x, left_eye.y, distance); 
      circle(right_eye.x, right_eye.y, distance); 

        //left wrist position
        let leftWrist = poses[0].left_wrist;
        if(leftWrist.y < 100) {
            background(0, 255, 0, 150);

        }
        */   
    }
        
}



function mousePressed(){
    console.log(poses); 
   
}