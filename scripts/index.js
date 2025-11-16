//Etapa 1 Sprint 8
//Desplegar popup
let profileButtonEdit = document.querySelector(".profile__edit-button");
let profilePopup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
let nameInput = document.querySelector(".popup__input_name");
let occupationInput = document.querySelector(".popup__input_occupation");

function displayPopup() {
  profilePopup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
  toggleButtonState();
}
profileButtonEdit.addEventListener("click", displayPopup);

//Cerrar popup
let closeButton = document.querySelector(".popup__close-button");
function closePopup() {
  profilePopup.classList.remove("popup_opened");
}
closeButton.addEventListener("click", closePopup);

//Botón "Me gusta"
// 1. Seleccionar TODOS los botones que tengan la clase card__like-button
const likeButtons = document.querySelectorAll(".card__like-button");
// 2. Recorrer todos los botones y agregales EventListener
likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 3: Toggle para alternar entre estado activo e inactivo
    button.classList.toggle("card__like-button_active");
  });
});

// Actualizar contenido de campos de texto -> Botón guardar

let formElement = document.querySelector(".popup__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;

  profilePopup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

//Botón guardar deshabilitado
let popupSubmitButton = document.querySelector(".popup__save-button");
function toggleButtonState() {
  if (nameInput.value === "" || occupationInput.value === "") {
    popupSubmitButton.disabled = true;
  } else {
    popupSubmitButton.disabled = false;
  }
}
//Cada vez que el usuario escriba o borre algo en los campos, se evaluará si se puede activar el botón o no.
nameInput.addEventListener("input", toggleButtonState);
occupationInput.addEventListener("input", toggleButtonState);
