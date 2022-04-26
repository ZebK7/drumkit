{
    var numberOfButtons = document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
  });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
  });

  function sound(key) {
    switch (key) {
      case "q":
        var sound1 = new Audio("music/q.mp3");
        sound1.play();
        break;
    
      case "w":
        var sound2 = new Audio("music/w.mp3");
        sound2.play();
        break;
    
      case "e":
        var sound3 = new Audio('music/e.mp3');
        sound3.play();
        break;
    
      case "r":
        var sound4 = new Audio('music/r.mp3');
        sound4.play();
        break;
    
      case "t":
        var sound5 = new Audio('music/t.mp3');
        sound5.play();
        break;
    
      case "y":
        var sound6 = new Audio('music/y.mp3');
        sound6.play();
        break;
    
      case "u":
        var sound7 = new Audio('music/u.mp3');
        sound7.play();
        break;
    
      default: console.log(key);
    }
  }

  function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }



}
