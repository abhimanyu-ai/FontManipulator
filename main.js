difference=0;
leftwristX=0;
rightwristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(450, 450);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#6C91C2');
    document.getElementById("text_side").innerHTML="Width and height of the text will be =" + difference + "px";
    textSize(difference);
    text('Tony Stark', 20, 200);
    fill('#FFE787');
}
function modelLoaded() {
    console.log('Model loaded');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X=" + noseX + " Nose Y=" + noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("Left Wrist X=" + leftwristX + " Right Wrist X=" + rightwristX + " Difference=" + difference);
    }
    }