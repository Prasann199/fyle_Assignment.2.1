function slider(){
    var btn1 = document.querySelector(".btns1");
var btn2 = document.querySelector(".btns2");
var btn3 = document.querySelector(".btns3");

btn2.addEventListener("click", () => {
    btn1.src = "assetes/2.svg";
    btn2.src = "assetes/1.svg";
    btn3.src = "assetes/3.svg";

});

btn1.addEventListener("click", () => {
    btn1.src = "assetes/1.svg";
    btn2.src = "assetes/2.svg";
    btn3.src = "assetes/3.svg";
});

btn3.addEventListener("click", () => {
    btn1.src = "assetes/2.svg";
    btn2.src = "assetes/3.svg";
    btn3.src = "assetes/1.svg";
});
}
slider()

function hover(){
    var box1=document.querySelector(".img1")
var layout=document.querySelector(".layout")
box1.addEventListener("mouseenter",()=>{
    layout.style.height="100%"

})
box1.addEventListener("mouseleave",()=>{
    layout.style.height="0%"
})

var box2=document.querySelector(".img2")
var layout2=document.querySelector(".layout2")
box2.addEventListener("mouseenter",()=>{
    layout2.style.height="100%"
})
box2.addEventListener("mouseleave",()=>{
    layout2.style.height="0%"
})

var box3=document.querySelector(".img3")
var layout3=document.querySelector(".layout3")
box3.addEventListener("mouseenter",()=>{
    layout3.style.height="100%"
})
box3.addEventListener("mouseleave",()=>{
    layout3.style.height="0%"
})

var box4=document.querySelector(".img4")
var layout4=document.querySelector(".layout4")
box4.addEventListener("mouseenter",()=>{
    layout4.style.height="100%"
})
box4.addEventListener("mouseleave",()=>{
    layout4.style.height="0%"
})

var box5=document.querySelector(".img5")
var layout5=document.querySelector(".layout5")
box5.addEventListener("mouseenter",()=>{
    layout5.style.height="100%"
})
box5.addEventListener("mouseleave",()=>{
    layout5.style.height="0%"
})
var box6=document.querySelector(".img6")
var layout6=document.querySelector(".layout6")
box6.addEventListener("mouseenter",()=>{
    layout6.style.height="100%"
})
box6.addEventListener("mouseleave",()=>{
    layout6.style.height="0%"
})

var box7=document.querySelector(".img7")
var layout7=document.querySelector(".layout7")
box7.addEventListener("mouseenter",()=>{
    layout7.style.height="100%"
})
box7.addEventListener("mouseleave",()=>{
    layout7.style.height="0%"
})

var box8=document.querySelector(".img8")
var layout8=document.querySelector(".layout8")
box8.addEventListener("mouseenter",()=>{
    layout8.style.height="100%"
})
box8.addEventListener("mouseleave",()=>{
    layout8.style.height="0%"
})

var box9=document.querySelector(".img9")
var layout9=document.querySelector(".layout9")
box9.addEventListener("mouseenter",()=>{
    layout9.style.height="100%"
})
box9.addEventListener("mouseleave",()=>{
    layout9.style.height="0%"
})

var box10=document.querySelector(".img10")
var layout10=document.querySelector(".layout10")
box10.addEventListener("mouseenter",()=>{
    layout10.style.height="100%"
})
box10.addEventListener("mouseleave",()=>{
    layout10.style.height="0%"
})

var box11=document.querySelector(".img11")
var layout11=document.querySelector(".layout11")
box11.addEventListener("mouseenter",()=>{
    layout11.style.height="100%"
})
box11.addEventListener("mouseleave",()=>{
    layout11.style.height="0%"
})
var box12=document.querySelector(".img12")
var layout12=document.querySelector(".layout12")
box12.addEventListener("mouseenter",()=>{
    layout12.style.height="100%"
})
box12.addEventListener("mouseleave",()=>{
    layout12.style.height="0%"
})
}
hover();
function clickeffect(){
    var box1=document.querySelector(".projects-box1");
    var box2=document.querySelector(".projects-box2");
    var box3=document.querySelector(".projects-box3");
    var box11=document.querySelector(".projects-box1 p");
    var box21=document.querySelector(".projects-box2 p");
    var box31=document.querySelector(".projects-box3 p");
    var image=document.querySelector(".project-down-left img")
    box1.addEventListener("click",()=>{
        box1.style.backgroundColor="#ff3147"
        box1.style.color="white"
        box11.style.color="white"
        box1.style.scale=1.07;
        box2.style.backgroundColor="transparent"
        box2.style.scale=1;
        box2.style.color="black"
        box21.style.color="black"
        box3.style.backgroundColor="transparent"
        box3.style.scale=1;
        box3.style.color="black"
        box31.style.color="black"
        image.src="https://img.freepik.com/premium-photo/group-vegetables-top-view-with-aesthetic-arrangement-generative-ai_175880-2868.jpg";
        
    })
    box2.addEventListener("click",()=>{
        box2.style.backgroundColor="#ff3147"
        box2.style.color="white"
        box21.style.color="white"
        box2.style.scale=1.07;
        box3.style.backgroundColor="transparent"
        box3.style.scale=1;
        box3.style.color="black"
        box31.style.color="black"
        box1.style.backgroundColor="transparent"
        box1.style.scale=1;
        box1.style.color="black"
        box11.style.color="black"
        image.src="assetes/image.png"
    })
    box3.addEventListener("click",()=>{
        box3.style.backgroundColor="#ff3147"
        box3.style.color="white"
        box31.style.color="white"
        box3.style.scale=1.07;
        box2.style.backgroundColor="transparent"
        box2.style.scale=1;
        box2.style.color="black"
        box21.style.color="black"
        box1.style.backgroundColor="transparent"
        box1.style.scale=1;
        box1.style.color="black"
        box11.style.color="black"
        image.src="https://img.freepik.com/free-photo/front-view-fresh-red-strawberries-mellow-fruits-berries-inside-plate-dark-blue-surface-berry-fruit-mellow-summer_140725-39919.jpg?t=st=1717362584~exp=1717366184~hmac=373e0d1981037e8c5211b48ec999ec0e659c40a5c91b417e6ac504606153150c&w=740"
    })
}
clickeffect();

function popup(){
    var btn = document.querySelector(".contact-btn");
    var windw = document.querySelector("form.hidden");
    var back = document.querySelector(".diver");
    var btn2=document.querySelector(".sub")
    var flag = false;
    
    btn.addEventListener("click",(e)=>{
        e.stopPropagation();
        back.style.display=flag?"none":"flex";
        flag=!flag;
    })
    back.addEventListener("click",(e)=>{
        if(flag===true && e.target=== back){
            back.style.display="none";
            flag=false;
        }
    })
    document.querySelector('form.hidden').addEventListener('submit', function(event) {
        setTimeout(()=>{
            document.querySelector("#myForm").reset();
        },1000)
        setTimeout(() => {
            back.style.display="none";
            flag=false;
        }, 3000);    
    });
    btn2.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    windw.addEventListener("click",(e)=>{
        e.stopPropagation();
       
    })
}
popup();
