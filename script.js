document.addEventListener("DOMContentLoaded", function(){
  const tracksList = document.querySelectorAll(".music");

  const audio = new Audio();
  audio.volume = 0.3;
  audio.onloadeddata = function() {
    console.log(audio);
    audio.play();
  }

  for (let i = 0; i < tracksList.length; i++) {
    tracёksList[i].addEventListener("click", function(e){
      setActiveTrack(e.currentTarget)


    })
    }

  function setActiveTrack (element) {
    for (let i = 0; i < tracksList.length; i++) {
      tracksList[i].classList.remove("is-active")
    }
    element.classList.add("is-active")

    audio.src = element.dataset.trackSrc;
  }

  const STS = (sectionId) => document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})

  const linkMenu = document.querySelectorAll(".menu");
  for (let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener("click", function(e){
      STS(e.currentTarget.dataset.sectionId)
    })
    }

  function scrollToSection (sectionId) {

    
    const el = document.getElementById(sectionId);
    // console.log(el);
    el.scrollIntoView({behavior: "smooth"});


  }



  function getTimeLine (element) {
    const xy = MouseEvent.offsetX(xy);
    console.log(xy);
    xy.MouseEvent.offsetX(xy)


  }

});