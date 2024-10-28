// JavaScript Document//

let nav = document.querySelector('.nav')

let tween = gsap.to("#circle", {
  duration: 2, 
  rotation: 360,
  opacity:1,
  ease: "none", 
  paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();

