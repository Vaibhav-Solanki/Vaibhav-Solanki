window.addEventListener('resize', reportWindowSize);
var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
document.querySelector("#cart").innerHTML=cart.length;

document.getElementById("msearch").addEventListener("click",stog);
function stog(el){
    var sr=document.querySelector(".hsc");
    if(sr.style.visibility == "hidden"||sr.style.visibility == ""){
        sr.style.visibility = "visible";
        sr.style.display = "block";
        document.querySelector("#clickSerach").style.height="auto"
    }
    else{sr.style.visibility = "hidden";
    document.querySelector("#clickSerach").style.height="0px"
}
}


// slider
var i=0;
var img_slide=["url(./image/1.webp)","url(./image/2.webp)","url(./image/3.webp)","url(./image/4.webp)"];
var img_slide_bg=["url(./image/1.jpg)","url(./image/2.jpg)","url(./image/3.jpg)","url(./image/4.jpg)"];
var slide=document.querySelector("#f1")
if(screen.width>767)
slide.style.backgroundImage=img_slide_bg[i];
else
slide.style.backgroundImage=img_slide[i];
document.querySelector(".left-button").addEventListener("click",slideleft);
document.querySelector(".right-button").addEventListener("click",slideright);
function slideleft(){
    if(screen.width>767){
        if(i==0)
    slide.style.backgroundImage=img_slide_bg[i=3];
    else
    slide.style.backgroundImage=img_slide_bg[--i];
    }else{
    if(i==0)
    slide.style.backgroundImage=img_slide[i=3];
    else
    slide.style.backgroundImage=img_slide[--i];
    }
}
function slideright(){
    if(screen.width>767){
        if(i==3)
    slide.style.backgroundImage=img_slide_bg[i=0];
    else
    slide.style.backgroundImage=img_slide_bg[++i];
    }else{
    if(i==3)
    slide.style.backgroundImage=img_slide[i=0];
    else
    slide.style.backgroundImage=img_slide[++i];
    }
}


// ather lider


var prodData= [
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/01_WBG_RETINOL_SERUM_20ml_dede3213-fc9c-41c2-889b-3840973e5ff8_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:300
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/Conditioner_Front_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:350
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/ScalpSerum_Front_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:600
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/WBG_Front_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:750
  },
  {
    img:"https://cdn.shopify.com/s/files/1/0390/2985/products/01_NS_LISTING-15ML_b12244f6-28e7-4dcb-a0b4-ed542f538271_400x.jpg",
    title:"Tea Tree Dandruff Control Shampoo",
    price:399
  }
];
const bestSeller=document.querySelector("#best-seller");
const whatsnew=document.querySelector("#whatsnew");
showData(bestSeller,prodData);
showData(whatsnew,prodData);
function showData(el,data){
  el.innerHTML="";
  var size=Math.floor(screen.width/270);
  data=data.slice(0,size);
  data.map((pr)=>{
  var div=document.createElement("div");
  div.setAttribute("class","p-card");
  var img=document.createElement("img");
  img.setAttribute("src",pr.img);
  var h2=document.createElement("h2");
  h2.innerHTML=pr.title;
  var hr=document.createElement("hr");
  var p=document.createElement("p");
  p.innerHTML="₹ "+pr.price;
  var p2=document.createElement("p");
  p2.innerHTML='<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
  var button=document.createElement("button");
  button.innerHTML="add to cart";
  button.addEventListener("click", function () {
    console.log(pr);
    addToCart(pr);
});
  div.append(img,h2,hr,p,p2,button);
  el.append(div);
  });
}

function reportWindowSize(){
  showData(bestSeller,prodData);
showData(whatsnew,prodData);
if(screen.width>767)
slide.style.backgroundImage=img_slide_bg[i];
else
slide.style.backgroundImage=img_slide[i];
}





function addToCart(elem) {        
  var cartObj={
      img: elem.img,
      title: elem.title,
      price: elem.price
  }
  console.log(cart);
  cart.push(cartObj);
  document.querySelector("#cart").innerHTML=cart.length;
  localStorage.setItem("cartItems", JSON.stringify(cart));
}