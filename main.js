var mouseEvent = "";
var last_position_mouse_x, last_position_mouse_y;
var radius = 30;
canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d")



canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent = "mouseDown";
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
radius=document.getElementById("radius").value;

    
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {

    mouseEvent = "mouseUP";
}

//mousemove+mousedown>>>start drawing
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    current_position_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_mouse_x + "y = " + last_position_mouse_y);
       
        ctx.arc(current_position_mouse_x, current_position_mouse_y,radius,0,2 * Math.PI);
        ctx.stroke();
    }
    last_position_mouse_x = current_position_mouse_x;
    last_position_mouse_y = current_position_mouse_y;


}