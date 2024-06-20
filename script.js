// homepage video clipping and text scaling big and small and thn left right animation on text.
function homePage(){
    gsap.set(".slidesm",{scale: 5})

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start:"top top",
            end: "bottom bottom",
            scrub : 1,
        }       
    })

    tl.to(".vid",{
    '--clip': "0%",
    ease: Power2
},'a')

tl.to(".slidesm",{
    scale: 1,
    ease: Power2
},'a')

tl.to(".lft",{
    xPercent: -15,
    stagger : .0, 
    ease: Power2
},'b')
tl.to(".rgt",{
    xPercent: 15,
    stagger : .0, 
    ease: Power2
},'b')

}

//horizontal scroll
function slides(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger: ".membership",
            start:"top top",
            end: "bottom bottom",
            scrub: 0.5
        },
        xPercent: -380,
        ease: Power4
    });
}

// Team animation of bring photos after move enter and move with mouse in direction
function teamAnimation(){
document.querySelectorAll(".listelem").forEach(function(el){
    el.addEventListener("mousemove", function(dets){
        gsap.to(this.querySelector(".im1"),{
            opacity: 1,
            x : gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
            ease: Power1,
            duration: .5
        })
    })
    
    el.addEventListener("mouseleave", function(dets){
    gsap.to(this.querySelector(".im1"),{
        opacity: 0,
        ease: Power1,
        duration:.5
    })
    })

})
}


function para1(){
var clutter ="";
document.querySelector(".textpara").textContent.split("").forEach(function(e){
    if(e === " ") clutter +=`<span>&nbsp;</span>`
    clutter +=`<span>${e}</span>`
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span",{opacity: .1})
gsap.to(".textpara span",{
    scrollTrigger:{
        trigger :".reviews",
        start: "top 60%",
        end: "bottom 90%",
        scrub: .2
    },
    opacity : 1,
    stagger: .03,
    ease: Power4
})
}

function para2(){
var clutter ="";
document.querySelector(".textpar").textContent.split("").forEach(function(e){
    if(e === " ") clutter +=`<span>&nbsp;</span>`
    clutter +=`<span>${e}</span>`
})
document.querySelector(".textpar").innerHTML = clutter;

gsap.set(".textpar span",{opacity: .1})
gsap.to(".textpar span",{
    scrollTrigger:{
        trigger :".review",
        start: "top 60%",
        end: "bottom 90%",
        scrub: .2
    },
    opacity : 1,
    stagger: .03,
    ease: Power4
})
}

function loco(){
(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
}

function featuresAnimation(){
    document.querySelectorAll(".listele").forEach(function(el){
        el.addEventListener("mousemove", function(dets){
            gsap.to(this.querySelector(".im1"),{
                opacity: 1,
                x : gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power1,
                duration: .5
            })
        })
        
        el.addEventListener("mouseleave", function(dets){
        gsap.to(this.querySelector(".im1"),{
            opacity: 0,
            ease: Power1,
            duration:.5
        })
        })
    
    })
}

document.querySelectorAll(".section").forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 60%",
        bottom: "bottom 60%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);
        }
    })
})

teamAnimation();
homePage();
slides();
para1();
para2();
featuresAnimation();