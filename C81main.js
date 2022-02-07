canvas=document.getElementById("myCanvas");
canvas.getContext("2d");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    mousex=e.clientX- canvas.offsetLeft;
    mousey=e.clientY- canvas.offsetTop;
    circle(mousex,mousey);
}
function circle(mousex,mousey)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}
function erasecanvas()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}