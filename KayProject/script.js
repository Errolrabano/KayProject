document.addEventListener("mousemove", e => {
    gsap.to(".imgBx", {
        x : e.clientX,
        y : e.clientY,
        stagger : 0.1
    }) 
})

function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }