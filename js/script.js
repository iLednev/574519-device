//Промо слайдер

var overlay = document.querySelector(".pop-up-overlay");
var bannersButtons = document.querySelectorAll(".switch-button");
var checkedButton = document.querySelector(".switch-button.checked");
var allBanners = document.querySelectorAll(".banners-slide");
var showSlide =  document.querySelector(".banners-slide.show-flex");

for (var i = 0; i < bannersButtons.length; i++) {
  bannersButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault ();
    if (!this.classList.contains("checked")) {
      checkedButton.classList.remove("checked");
      checkedButton = this;
      this.classList.add("checked");

      for (var j = 0; j < allBanners.length; j++) {
        if (bannersButtons[j].classList.contains("checked")) {
          showSlide.classList.remove("show-flex");
          allBanners[j].classList.add("show-flex");
          showSlide = allBanners[j];
        }
      }
    }
  });
}

//Слайдер услуг

var servicesButtons = document.querySelectorAll(".button-services");
var servicesCheckedButton = document.querySelector(".button-services-checked");
var allServices = document.querySelectorAll(".services-slide");
var showService =  document.querySelector(".services-slide.show-block");

for (var i = 0; i < servicesButtons.length; i++) {
  servicesButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault ();
    if (!this.classList.contains("button-services-checked")) {
      servicesCheckedButton.classList.remove("button-services-checked");
      servicesCheckedButton = this;
      this.classList.add("button-services-checked");

      for (var j = 0; j < allServices.length; j++) {
        if (servicesButtons[j].classList.contains("button-services-checked")) {
          showService.classList.remove("show-block");
          allServices[j].classList.add("show-block");
          showService = allServices[j];
        }
      }
    }
  });
}

//Поп-ап с картой

var map = document.querySelector(".map-pop-up");
var mapButton = document.querySelector(".map-container");
var closeMap = document.querySelector(".close-map");

mapButton.addEventListener("click", function(evt) {
  evt.preventDefault ();
  map.classList.add("show-block");
  overlay.classList.add("show-block");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault ();
  map.classList.remove("show-block");
  overlay.classList.remove("show-block");
});


overlay.addEventListener("click", function(evt) {
  evt.preventDefault ();
  writeUs.classList.remove("show-block");
  map.classList.remove("show-block");
  overlay.classList.remove("show-block");
});

//Поп-ап с обратной связью

var formEmail = document.querySelector(".write-us-email");
var formMessage = document.querySelector(".write-us-textarea");
var formName = document.querySelector(".write-us-name");
var formArray = [formName, formEmail, formMessage];
var submit = document.querySelector(".write-us-form");
var writeUs = document.querySelector(".write-us-pop-up");
var writeButton = document.querySelector(".button-write-us");
var closeWriteUs = document.querySelector(".close-write-us");

writeButton.addEventListener("click", function(evt) {
  evt.preventDefault ();
  writeUs.classList.add("show-block");
  overlay.classList.add("show-block");
  writeUs.classList.remove("modal-error");
  formName.focus();
  for (var i = 0; i < formArray.length; i++) {
    formArray[i].addEventListener ("focus", function() {
      if(this.classList.contains("invalid")) {
        this.classList.remove("invalid");
      }
    });
  }
});

closeWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault ();
  writeUs.classList.remove("show-block");
  overlay.classList.remove("show-block");
});

submit.addEventListener("submit", function (evt) {
  writeUs.classList.remove("modal-error");
  writeUs.offsetWidth = writeUs.offsetWidth;
  if(!formName.value || !formMessage.value || !formEmail.value) {
    evt.preventDefault ();
    writeUs.classList.add("modal-error");
    for (var i = 0; i < formArray.length; i++) {
      if (!formArray[i].value) {
        formArray[i].classList.add("invalid");
      }
    }
  }
  else {
    writeUs.classList.remove("show-block");
    overlay.classList.remove("show-block");
  }
});
