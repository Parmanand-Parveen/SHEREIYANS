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