//document - вся страница
//window - всё окно
//document.querySelector("селектор") {} - поиск по css-селектору
//element.addEventListener("действие", function () {}) - перехват пользовательского действия (клик, нажатие клавиши и т.д.)
//preventDefault() - отмена стандартного действия элемента
//element.classList.add("класс") - добавление класса элементу

//Промо слайдер

var bannersButtons = document.querySelectorAll(".switch-button");
var checkedButton = document.querySelector(".switch-button.checked");
var allBanners = document.querySelectorAll(".banners-slide");
var showSlide =  document.querySelector(".banners-slide.show-flex");

for (var i = 0; i < bannersButtons.length; i++) {
  bannersButtons[i].addEventListener("click", function (evt) {
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
  })
}

//Слайдер услуг

var servicesButtons = document.querySelectorAll(".button-services");
var servicesCheckedButton = document.querySelector(".button-services-checked");
var allServices = document.querySelectorAll(".services-slide");
var showService =  document.querySelector(".services-slide.show-block");

for (var i = 0; i < servicesButtons.length; i++) {
  servicesButtons[i].addEventListener("click", function (evt) {
    evt.preventDefault ();
    if (!this.classList.contains(".button-services-checked")) {
      servicesCheckedButton.classList.remove("button-services-checked");
      servicesCheckedButton = this;
      this.classList.add("button-services-checked");

      for (var j = 0; j < allServices.length; j++) {
        if (servicesButtons[j].classList.contains("button-services-checked")) {
          showService.classList.remove("services-show");
          allServices[j].classList.add("services-show");
          showService = allServices[j];
        }
      }
    }
  })
}

//Поп-ап с обратной связью

var writeUs = document.querySelector(".write-us-pop-up");
var writeButton = document.querySelector(".button-write-us");

writeButton.addEventListener("click", function (evt) {
  evt.preventDefault ();
  writeUs.classList.add("")
})
