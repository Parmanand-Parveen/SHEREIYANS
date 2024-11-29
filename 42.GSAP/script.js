let tl =gsap.timeline()


tl.from(".logo",{
    duration:1,
    x:-100,
    opacity:0
})

tl.from(".link p",{
    duration:1,
    x:-100,
    opacity:0,
    stagger:0.5
})

tl.from(".left h2",{
    duration:1,
    x:-100,
    opacity:0
})

tl.from(".left p",{
    duration:1,
    x:-100,
    opacity:0,
    stagger:0.5
})

tl.from(".left button",{
    duration:1,
    x:-100,
    opacity:0,
    stagger:0.5
})

tl.from(".right img",{
    duration:1,
    x:100,
    scale:0
})


tl.from("#page2 .card",{
    duration:1.5,
    y:-200,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger: "#page2",
        scroller:"body",
        start:"top 45%",
        end:"top 10%",
        scrub:1
    }
})