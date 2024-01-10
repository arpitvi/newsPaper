const scroll = new LocomotiveScroll({
    el: document.querySelector('#newsContainer'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#newsContainer",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to("#newsContainer",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to("#newsContainer",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.5
})