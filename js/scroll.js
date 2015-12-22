/**
 * Created by liu on 2015/5/6.
 */
var container = document.getElementById('wrapper');
var oImg = document.getElementById('list').getElementsByTagName('img');
var list = document.getElementById('list');
var width = document.body.clientWidth;
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var len = 3;
var timer;
var animated = false;
list.style.left = -width + 'px';
list.style.width = width * oImg.length+'px';
for( var i = 0;i<oImg.length;i++)
{
    oImg[i].style.width = width+'px';
}
function animate(offset)
{
    if (offset == 0||animated) {
        return;
    }
    animated = true;
    var time = 800;
    var inteval = 5;
    var speed = offset/(time/inteval);
    var left = parseInt(list.style.left) + offset;

    var go = function (){
        if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
            list.style.left = parseInt(list.style.left) + speed + 'px';
            setTimeout(go, inteval);
        }
        else {
            list.style.left = left + 'px';
            if(left>-width){
                list.style.left = -width * 3 + 'px';
            }
            if(left<(-width * 3)) {
                list.style.left = -width+'px';
            }
            animated = false;
        }
    }
    go();
}
function play() {
    timer = setTimeout(function () {
        next.onclick();
        play();
    }, 3000);
}
function stop() {
    clearTimeout(timer);
}
prev.onclick = function()
{
    animate(width);
}
next.onclick = function()
{
    animate(-width);
}

play();
