for(var overlay=document.querySelector(".pop-up-overlay"),bannersButtons=document.querySelectorAll(".switch-button"),checkedButton=document.querySelector(".switch-button.checked"),allBanners=document.querySelectorAll(".banners-slide"),showSlide=document.querySelector(".banners-slide.show-flex"),i=0;i<bannersButtons.length;i++)bannersButtons[i].addEventListener("click",function(e){if(e.preventDefault(),!this.classList.contains("checked")){checkedButton.classList.remove("checked"),(checkedButton=this).classList.add("checked");for(var s=0;s<allBanners.length;s++)bannersButtons[s].classList.contains("checked")&&(showSlide.classList.remove("show-flex"),allBanners[s].classList.add("show-flex"),showSlide=allBanners[s])}});var servicesButtons=document.querySelectorAll(".button-services"),servicesCheckedButton=document.querySelector(".button-services-checked"),allServices=document.querySelectorAll(".services-slide"),showService=document.querySelector(".services-slide.show-block");for(i=0;i<servicesButtons.length;i++)servicesButtons[i].addEventListener("click",function(e){if(e.preventDefault(),!this.classList.contains("button-services-checked")){servicesCheckedButton.classList.remove("button-services-checked"),(servicesCheckedButton=this).classList.add("button-services-checked");for(var s=0;s<allServices.length;s++)servicesButtons[s].classList.contains("button-services-checked")&&(showService.classList.remove("show-block"),allServices[s].classList.add("show-block"),showService=allServices[s])}});var map=document.querySelector(".map-pop-up"),mapButton=document.querySelector(".map-container"),closeMap=document.querySelector(".close-map");mapButton.addEventListener("click",function(e){e.preventDefault(),map.classList.add("show-block"),overlay.classList.add("show-block")}),closeMap.addEventListener("click",function(e){e.preventDefault(),map.classList.remove("show-block"),overlay.classList.remove("show-block")}),overlay.addEventListener("click",function(e){e.preventDefault(),writeUs.classList.remove("show-block"),map.classList.remove("show-block"),overlay.classList.remove("show-block")});var formEmail=document.querySelector(".write-us-email"),formMessage=document.querySelector(".write-us-textarea"),formName=document.querySelector(".write-us-name"),formArray=[formName,formEmail,formMessage],submit=document.querySelector(".write-us-form"),writeUs=document.querySelector(".write-us-pop-up"),writeButton=document.querySelector(".button-write-us"),closeWriteUs=document.querySelector(".close-write-us");writeButton.addEventListener("click",function(e){e.preventDefault(),writeUs.classList.add("show-block"),overlay.classList.add("show-block"),writeUs.classList.remove("modal-error"),formName.focus()}),closeWriteUs.addEventListener("click",function(e){e.preventDefault(),writeUs.classList.remove("show-block"),overlay.classList.remove("show-block")}),submit.addEventListener("submit",function(e){if(writeUs.classList.remove("modal-error"),writeUs.offsetWidth=writeUs.offsetWidth,!formName.value||!formMessage.value||!formEmail.value){e.preventDefault(),writeUs.classList.add("modal-error");for(var s=0;s<formArray.length;s++)formArray[s].value||formArray[s].classList.add("invalid")}});for(i=0;i<formArray.length;i++)formArray[i].addEventListener("focus",function(){this.classList.contains("invalid")&&this.classList.remove("invalid")});
