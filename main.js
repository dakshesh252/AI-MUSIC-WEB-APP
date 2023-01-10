Peter_pan_song="";
Harry_potter_theme_song="";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peter_pan_song = loadSound("peter_pan.mp3");
    Harry_potter_theme_song = loadSound("harry_potter.mp3");
}

function draw(){
    image(video,0,0,700,600);
}