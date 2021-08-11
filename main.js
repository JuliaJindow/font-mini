var rightWristX = 0;
var leftWristX = 0;
var difference = 0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 550);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
} 

function modelLoaded() {
    console.log("Model is loaded!");
}

function draw() {
    background('#fae');
    document.getElementById("text_font").innerHTML = "Font of the text is = " + difference + "px";
    textSize(difference);
    fill('#F90093');
    text('Julia', 200, 200);
}

function gotPoses(results) {
    if (results.length > 0) {
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX = " + rightWristX + "leftWristX = " + leftWristX);
        console.log("difference = " + difference);       
    }
}
