var modalFormOpen = document.querySelector(".contacts__button");
var modalWriteUs = document.querySelector(".write-us");
var closeWriteUs = modalWriteUs.querySelector(".modal__close");
var WriteUsName = modalWriteUs.querySelector("#name");
var WriteUsForm = modalWriteUs.querySelector(".modal__form");
var WriteUsEmail = modalWriteUs.querySelector("#email");



modalFormOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.add("modal-show");
    WriteUsName.focus();
});

closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteUs.classList.remove("modal-show");    
});

WriteUsForm.addEventListener("submit", function (evt) {
    if (!WriteUsName.value || !WrireUsEmail.value) {
        evt.preventDefault();
        console.log("Введите Ваше имя и адрес электронной почты");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modalWriteUs.classList.contains("modal-show")) {
            modalWriteUs.classList.remove("modal-show");
        }
    }
});


var mapOpen = document.querySelector(".map-popup");
var mapPopup = document.querySelector(".map.modal");
var mapClose = mapPopup.querySelector(".modal__close");

mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});