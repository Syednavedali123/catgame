function bulb_on(){
document.getElementById("bulbImage").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
document.getElementById("catImage").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
document.getElementById("heading_cat").textContent="switch ON";
document.getElementById("btn.n").style.Color="black";
document.getElementById("btn.n").style.backgroundColor="white";
document.getElementById("btn.f").style.backgroundColor="red";


}
function bulb_off(){
document.getElementById("bulbImage").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("catImage").src ="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
document.getElementById("heading_cat").textContent="switch OFF";
document.getElementById("btn.n").style.Color="black";
document.getElementById("btn.n").style.backgroundColor="red";
document.getElementById("btn.f").style.backgroundColor="white";


}
function click_b(){
document.getElementById("para").innerHTML="Thanks for visiting hope u enjoyed it"
setTimeout (function(){
document.getElementById("para").innerHTML="";
},2000);
}