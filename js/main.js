var elBody = document.querySelector("body");
var elBtnRec = document.querySelector(".button");
var elTitle = document.querySelector(".site-title");
var elTitles = document.querySelector(".site-titles");
var elStreet = document.querySelector(".street");
var elStreets = document.querySelector(".grass");
var elStreetLine = document.querySelector(".street-stripe");
var elSun = document.querySelector(".sun");
var elHill = document.querySelector(".hill");
var elMoon = document.querySelector(".moon");
var elStar = document.querySelector(".star");

var elCar = document.querySelector(".boundary-tyre-cover-inner");
var elBondary = document.querySelector(".boundary-tyre-cover");
var elCarBody = document.querySelector(".car-body");
var elTyre = document.querySelector(".tyre-cover-front");
var elBase = document.querySelector(".base-axcel");
var elBumper = document.querySelector(".front-bumper");
var elShadow = document.querySelector(".car-shadow");
var elTyree = document.querySelector(".tyre");
var elCAR = document.querySelector(".car");

var record = new webkitSpeechRecognition();

record.lang = "en-US"


record.onend = function(){
  console.log("===== Aloqa tugadi =====");
}


record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
}


record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];
  console.log(command);
  if(command.includes("hello")){
  elTitle.style.display="block";
  }
  if(command.includes("sunshine")){
    elSun.style.display="block";
  }
  if(command.includes("open")){
    elHill.style.display="block";
  }
  if(command.includes("Street")){
    elStreet.style.display="block";
    elStreets.style.display="block";
    elStreetLine.style.display="block";
    }
    if(command.includes("car")){
      elCar.style.display="block";
      elBondary.style.display="block";
      elCarBody.style.display="block";
      elTyre.style.display="block";
      elBase.style.display="block";
      elBumper.style.display="block";
      elShadow.style.display="block";
      elCAR.style.display="block";
      } 
      if(command.includes("eve")){
        elSun.style.display="none";
        elMoon.style.display="block";
        elStar.style.display="block";
        elBody.classList.toggle("evening");
        }
  if(command.includes("goodbye")){
    elTitles.style.display="block";
    }
  return command;
}



elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
})