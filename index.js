document.getElementById("msearch").addEventListener("click",stog);
function stog(el){
    var sr=document.querySelector(".hsc");
    if(sr.style.visibility == "hidden"||sr.style.visibility == ""){
        sr.style.visibility = "visible";
        document.querySelector("#clickSerach").style.height="auto"
    }
    else{sr.style.visibility = "hidden";
    document.querySelector("#clickSerach").style.height="0px"
}
}


// slider
var i=0;
var img_slide=["url(./image/1.webp)","url(./image/2.webp)","url(./image/3.webp)","url(./image/4.webp)"];
var slide=document.querySelector("#slider")
document.querySelector(".left-button").addEventListener("click",slideleft);
document.querySelector(".right-button").addEventListener("click",slideright);
function slideleft(){
    if(i==0)
    slide.style.backgroundImage=img_slide[i=3];
    else
    slide.style.backgroundImage=img_slide[--i];
}
function slideright(){
    if(i==3)
    slide.style.backgroundImage=img_slide[i=0];
    else
    slide.style.backgroundImage=img_slide[++i];
}