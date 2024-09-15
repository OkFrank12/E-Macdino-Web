"use strict";

const btnOpen = document.querySelector(".btn");
const btnClose = document.querySelector(".close__btn");
const popupBtnClose = document.querySelector(".close-btn");
const btnForm = document.querySelector(".form__btn");
const form = document.querySelector(".form");
const overlay = document.querySelector(".overlay");
const firstName = document.getElementById("firstname");
const phone = document.getElementById("phone");
const locationEl = document.getElementById("location");
const date = document.getElementById("date");
const time = document.getElementById("time");
const email = document.getElementById("email");
const description = document.getElementById("description");
const loader = document.querySelector(".loader");
const labelTextBtn = document.querySelector(".text");
const popup = document.getElementById("popup");
const orderID = document.getElementById("order-id");

btnOpen.addEventListener("click", function () {
  overlay.classList.add("show");
});

btnClose.addEventListener("click", function () {
  overlay.classList.remove("show");
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  loader.style.display = "block";
  labelTextBtn.style.display = "none";

  const mailData = {
    firstName: firstName.value,
    phone: phone.value,
    location: locationEl.value,
    date: date.value,
    time: time.value,
    email: email.value,
    description: description.value,
  };

  const res = await fetch("https://e-macdino-api.onrender.com/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailData),
  });

  const data = await res.json();

  if (data) {
    loader.style.display = "none";
    labelTextBtn.style.display = "block";
    overlay.classList.remove("show");
    setTimeout(() => (popup.style.display = "block"), 1000);
  }

  firstName.value =
    phone.value =
    locationEl.value =
    date.value =
    time.value =
    email.value =
    description.value =
      "";
  return data;
});

popupBtnClose.addEventListener("click", function () {
  popup.style.display = "none";
});
