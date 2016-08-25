/**
 * Created by Administrator on 2016/1/18.
 */
function if_panduan() {
    var age = 3;
    if (age >= 18) {
        document.writeln('adult');
    } else if (age < 6) {
        document.writeln('kid');
    } else {
        document.writeln('teenager');
    }
}
function  bmi(w,h){
    var bmi=w/Math.pow(h,2);
    if (bmi<18.5){
        return('过轻');
    }else if(bmi<25){
        return('正常');
    }else if(bmi<28){
        return('过重');
    }else if(bmi<=32){
        return('肥胖');
    }else{
        return('严重肥胖');
    }

}