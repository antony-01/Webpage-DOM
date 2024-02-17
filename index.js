var q=document.createElement("h1");
q.innerText="RANGE ROVER LAND ROVER SPORT";
q.style.color="brown";
q.style.fontSize="30px";
q.style.fontweight="bold";
q.style.textAlign="center";
document.body.appendChild(q);

//main-div
var z=document.createElement("div");
document.body.appendChild(z);
z.setAttribute("class","divy");
//img-div
var a=document.createElement("div");
z.appendChild(a);
var a1=document.createElement("h1");
a1.innerText="Checkout Brand New SUV";
a.appendChild(a1);
a.style.textAlign="center";
a.style.margin="0px";
a.setAttribute("class","divi");

var h=document.createElement("div");
z.appendChild(h);
h.setAttribute("class","divx");

 var b=document.createElement("div");
 h.appendChild(b);
 b.style.width="200px";
 var b1=document.createElement("img");
 b1.setAttribute("src","RR-1.webp");
 b1.setAttribute("width","100%");
 b1.setAttribute("height","170px")
 b.appendChild(b1);
 b.addEventListener("click",image);

 var d=document.createElement("div");
 h.appendChild(d);
 d.style.width="200px";
 var d1=document.createElement("img");
 d1.setAttribute("src","RR-2.jpg");
 d1.setAttribute("width","100%");
 d1.setAttribute("height","170px")
 d.appendChild(d1);
 
 d.addEventListener("click",image1);

 var f=document.createElement("div");
 h.appendChild(f);
 f.style.width="200px";
 var f1=document.createElement("img");
 f1.setAttribute("src","RR-3.webp");
 f1.setAttribute("width","100%");
 f1.setAttribute("height","170px")
 f.appendChild(f1);
 
 f.addEventListener("click",image2);

 var g=document.createElement("div");
 h.appendChild(g);
 g.style.width="200px";
 var g1=document.createElement("img");
 g1.setAttribute("src","RR-4.webp");
 g1.setAttribute("width","100%");
 g1.setAttribute("height","170px")
 g.appendChild(g1);
 g.addEventListener("click",image3);


 function image(){
  (function () {
        a.innerText = "";
    })();

   c= document.createElement("img");
   c.setAttribute("src","RR-1.webp");
   c.setAttribute("width","650px");
   c.setAttribute("height","350px");
   a.appendChild(c);
 
  
 }

 function image1(){
  (function () {
        a.innerText = "";
    })();

   e= document.createElement("img");
   e.setAttribute("src","RR-2.jpg");
   e.setAttribute("width","650px");
   e.setAttribute("height","350px");
   a.appendChild(e);
  

 }

 function image2(){
  (function () {
        a.innerText = "";
    })();

   l= document.createElement("img");
   l.setAttribute("src","RR-3.webp");
   l.setAttribute("width","650px");
   l.setAttribute("height","350px");
   a.appendChild(l);
}

function image3(){
 (function () {
       a.innerText = "";
   })();

  m= document.createElement("img");
  m.setAttribute("src","RR-4.webp");
  m.setAttribute("width","650px");
  m.setAttribute("height","350px");
  a.appendChild(m);
  
}