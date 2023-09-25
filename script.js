function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco();

var clutter = ""
document.querySelector("#text").textContent.split("").forEach(function(elem){
    clutter += `<h1>${elem}</h1>`

    document.querySelector("#text").innerHTML = clutter
})

var tl = gsap.timeline({
    repeat : -1,
    scrollTrigger: {
      trigger: ".page",
      scroller:"#main",
    }
  });

gsap.set(".centerimg",{
    opacity:1
})

   // animation page1onload..................
   var tl = gsap.timeline({
    // repeat : -1,
    scrollTrigger: {
      trigger: ".page",
      scroller:"#main",
    }
  });
  
  tl.from(".centerimg", {
    height: "0px",
    // opacity:0,
    ease: Expo.ease,
    // delay:3,
  })
  
  
  tl.to(".leftimg", {
    left: "37%",
    rotate: -17,
    duration: .5,
    ease: Power4,
    opacity: 1,
    // duration:2.5,
  }, 'a')
  
  
  tl.to(".rightimg", {
    left: "63%",
    rotate: 17,
    // duration: 2.5,
    ease: Power4,
    opacity: 1,
  }, 'a')
  
  
  tl.to("#text h1", {
    transform: "translateY(0)",
    stagger: .1,
    ease: Power4,
    delay: -.5,
  
  })
  
  // ............................................................... page1 load up 
  
  

  
  
  