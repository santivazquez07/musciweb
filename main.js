star_sound = "";
harry_sound = "";
left_wristX = 0;
left_wristY = 0;
right_wristX = 0;
right_wristY = 0;

function preload(){
    star_sound = loadSound("ringtones-star-wars.mp3");
    harry_sound = loadSound("ringtones-harry-potter.mp3");
}

function setup(){
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 450);
}

function modelLoaded(){
    console.log("poseNet se esta inicializando");
}

function gotPoses(results){
    if (results.length > 0){
        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;
        console.log("Las coordenadas de la muñeca izquierda en x son: " + left_wristX + "Las coordenadas de la muñeca izquierda en Y son: " + left_wristY);
        console.log("Las coordenadas de la muñeca derecha en x son: " + right_wristX + "Las coordenadas de la muñeca derecha en Y son: " + right_wristY);
    }
}