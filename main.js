var canvas;
var video;
var noseX=0
var noseY=0
var img;
function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    img = loadImage('hat.jpg');//loadimage

    //part1
    poseNet = ml5.poseNet(video, modelLoaded);
    //part2
    poseNet.on('pose', gotPoses);

}
//part 1
function modelLoaded(){
console.log('PoseNet is Intialized');
}

function gotPoses(results){
    console.log(results)
    if(results.length > 0){
        console.log("x ="+results[0].pose.nose.x)
        noseX=results[0].pose.nose.x
        console.log("y ="+results[0].pose.nose.y)
        noseY=results[0].pose.nose.y

    }


}

function draw(){
    image(video,0,0,400,400);
    fill(255, 0, 0);
    ellipse(noseX-120, noseY-40, 20, 20);
    image(img, 0, 0);
}

function take_snapshot(){
    save("MyName.jpg");

}
