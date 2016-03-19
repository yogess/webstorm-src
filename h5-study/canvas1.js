/**
 * Created by Administrator on 2016/1/18.
 */

var c2=document.getElementById("myCanvas2");
ctx2=c2.getContext("2d");
ctx2.fillStyle="#ff0000";
ctx2.beginPath();
ctx2.arc(70,18,15,0,Math.PI*2,true);
ctx2.closePath();
ctx2.fill();