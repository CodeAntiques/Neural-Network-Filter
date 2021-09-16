function preload(){
    mustache = loadImage("https://i.postimg.cc/bJSnKWPW/mustache.png");
    lips = loadImage("https://i.postimg.cc/J4rnXvg8/lips.jpg");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(700,300);
    video=createCapture(VIDEO);
   video.size(600,500);
   video.hide();
   poseNet=ml5.poseNet(video,modeloaded);
   poseNet.on("pose",gotResult)
}

function modeloaded(){
    console.log("Pose has been recognised")
}

function draw(){
    image(video,0,0,600,500)
   image(mustache,nosex,nosey,120,120)
   image(lips,nosex1,nosey1,80,50)
}
nosex=""
nosex1=""
nosey1=""
nosey=""

function gotResult(results){
    if (results.length>0) {
        console.log(results)
        nosex=results[0].pose.nose.x-50;
        nosey=results[0].pose.nose.y-50;
        nosex1=results[0].pose.nose.x-50;
        nosey1=results[0].pose.nose.y+40;

    }
}