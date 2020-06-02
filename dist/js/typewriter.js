
var option1  = ["Welcome!", "Join our boat tour.", "Explore new places.", "Have fun."]
var option2 = ["Click us","Or scroll down","This"," is"," us"," Argo Cruising"];
var option_used;
// This uses a typewriter plugin library. Credits to @: https://safi.me.uk/typewriterjs/
// It's a great and unbilevably simple typewriter.

var dataText; 
// checks if in home or who we are
if (window.location.pathname == "/dist/index.html"){
  dataText = document.getElementById('twrite');
  option_used = option1;
} else{
   dataText = document.getElementById('twrite-two');
   option_used = option2;
  }

  var typewriter = new Typewriter(dataText, {loop: true});


  if (option_used == option1){
    typewriter.typeString(option_used[0])
    .pauseFor(2500)
    .deleteAll()
    .typeString(option_used[1])
    .pauseFor(2500)
    .deleteAll()
    .typeString(option_used[2])
    .pauseFor(2500)
    .deleteAll()
    .typeString(option_used[3])
    .pauseFor(2500)
    .deleteAll() 
    .start();

  } else {
    typewriter.typeString(option_used[0])
    .pauseFor(200)
    .deleteAll()
    .typeString(option_used[1])
    .pauseFor(200)
    .deleteAll()

    .typeString(option_used[2])
    .pauseFor(100)
    .typeString(option_used[3])
    .pauseFor(100)
    .typeString(option_used[4])
    .pauseFor(500)
    .deleteChars(3)
    .typeString(option_used[5])
    .pauseFor(2500)
    .deleteAll() 
   
    .start(); 
  }
  

  // saving some space and putting the scroll function here

$("#bio-one").click(function() {
  $('html, body').animate({
      scrollTop: $(".bio-greg").offset().top
  }, 2000);
});

$("#bio-two").click(function() {
  $('html, body').animate({
      scrollTop: $(".bio-john").offset().top
  }, 2000);
});