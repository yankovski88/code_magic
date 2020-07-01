// <script>
var fireballSize = 22;
// var b = 3;
// var  asd = 4;

// var summa = function (b , asd) {
// var  s = b + asd;
//     // console.log(s)
//     if (s === 5){
//         return 50;
//     }
// }
// console.log(summa(2, 3));

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var windBlows  =  function (left) {
        if (left === "left"){
            return 5;
        }else {
            return 2;
        }
    }
var getFireballSpeed = windBlows("left");
// console.log(getFireballSpeed);



var pMag = function (wizardWidth) {
    var propMag = 1.337 * wizardWidth;
    return propMag;
}
// console.log(pMag(wizardWidth));

var getWizardHeight = pMag(wizardWidth);
// console.log(getWizardHeight);


var getWizardX = function (width) {
    var bb = width/2;
    return bb;
}
// console.log(getWizardX(12));

var getWizardY = function ( height) {
    return height/3;
}
// console.log(getWizardY(12));