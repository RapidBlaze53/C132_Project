statuss = "";
img = "";
objects = [];


function preload() {
img = loadImage("C131_Project_Image4.jpg");
}

function setup() {
    canvas = createCanvas (640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {
        image(img, 0, 0, 640, 420);
}

function modelLoaded() {
    console.log("Model Loaded");
    statuss = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function toMain() {
    window.location = "index.html";
    console.log("To Main page")
}