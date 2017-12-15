
function load(){

var date=new Date;
var s=date.getSeconds();
var m=date.getMinutes();
var h=date.getHours();
var angleh=(h*30) + (m/2);
var anglem=(m*6)
var angles=(s*6)
document.getElementById("hour").style.webkitTransform ='rotate('+ angleh +'deg)'; 
document.getElementById("hour").style.transform ='rotate('+ angleh +'deg)'; 
document.getElementById("minute").style.webkitTransform ='rotate('+ anglem +'deg)'; 
document.getElementById("minute").style.transform ='rotate('+ anglem +'deg)'; 
document.getElementById("seconds").style.webkitTransform ='rotate('+ angleh +'deg)'; 
document.getElementById("seconds").style.transform ='rotate('+ angles +'deg)'; 
}
