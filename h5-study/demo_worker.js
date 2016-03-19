/**
 * Created by Administrator on 2016/1/18.
 */
var i=0;
function timedCount(){
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}
timedCount();