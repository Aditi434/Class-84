canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image1=["mars.jpg", "Mars2.jpg", "Mars3.jpeg", "mars4.jpg", "mars5.jpg"];

var random_img= Math.floor(Math.random() * 4);
background_image=background_image1[random_img];
rover_image="rover.png";
rover_x=10;
rover_y=10;

function addImg()
{
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag= new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeyDown);
function mykeyDown(e)

{
 keyPressed=e.keyCode;
 console.log("keyPressed");
 if(keyPressed =='38')//38 is for up key
 {
     up();
 }

 if(keyPressed == '40')//40 is for down key
 {
     down();
 }
 
 if(keyPressed == '37')//37 is for left
 {
     left();
 }

if(keyPressed == '39')//39 is for right
{
    right();
}

    
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y - 10;
        console.log("x=" + rover_x + "," + "y=" + rover_y)
        uploadBackground();
        uploadRover();
    }

}
function down()
{
    if(rover_y<=500)
    {
        
        rover_y = rover_y + 10;
        console.log("x=" + rover_x + "," + "y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        console.log("x=" + rover_x + "," + "y=" + rover_y)
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(rover_x<=700)
    {
        rover_x = rover_x + 10;
        console.log("x=" + rover_x + "," + "y=" + rover_y)
        uploadBackground();
        uploadRover();
    }
}