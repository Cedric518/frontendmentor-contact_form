"use strict";

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const queryTypeChecked = document.querySelector(
  'input[name="query-type"]:checked'
); //only the checked one will be selected
const queryType = document.querySelector("#general-enquiry");
const textarea = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const btn = document.querySelector(".btn-submit");
let firstNameValue;
let lastNameValue;
let emailValue;
let messageValue;
const test = document.querySelector(".test");
console.log(test.nextElementSibling.classList.contains("error-message"));

// methods
const capitalize = (el) => el[0]?.toUpperCase() + el.slice(1)?.toLowerCase();
let p;
// error messages
const error = (element, message) => {
  if (
    !element
      .closest(".parent")
      .nextElementSibling?.classList.contains("error-message")
  ) {
    p = document.createElement("p");

    p.innerText = message;
    p.classList.add("error-message");
    element.closest(".parent").after(p);
  }
};

const messageDisplay = function (el, errel) {
  return errorMessages[el.type] || "";
};

const errorMessages = {
  text: "This field is required",
  radio: "Please select a query type",
  checkbox: "To submit this form, please consent to being contacted",
  email: "Please enter a valid email",
  textarea: "This field is required",
};

//  VALIDATION METHODS
const validfirstName = (firstName) => {
  firstNameValue = firstName.value.trim();
  if (firstNameValue === "") {
    error(firstName, messageDisplay(firstName));
    firstName.dataset.error = "err";
  } else {
    firstName.dataset.error = "valid";
  }
};

const validLastName = (lastName) => {
  lastNameValue = lastName.value.trim();
  if (lastNameValue === "") {
    error(lastName, messageDisplay(lastName));
    lastName.dataset.error = "err";
  } else {
    lastName.dataset.error = "valid";
  }
};

const validEmail = (email) => {
  emailValue = email.value.trim();
  if (emailValue === "") {
    error(email, messageDisplay(email));
    email.dataset.error = "err";
  } else {
    email.dataset.error = "valid";
  }
};

const queryTypeSelected = (queryType) => {
  if (!queryTypeChecked) {
    error(queryType, messageDisplay(queryType));
    queryType.dataset.error = "err";
  } else {
    queryType.dataset.error = "valid";
  }
};

const validMessage = (message) => {
  messageValue = message.value;
  if (messageValue === "" || messageValue.split(" ").length < 5) {
    error(message, messageDisplay(message));
    message.dataset.error = "err";
  } else {
    message.dataset.error = "valid";
  }
};
const checkboxChecked = (checkbox) => {
  if (!checkbox.checked) {
    error(checkbox, messageDisplay(checkbox));
    checkbox.dataset.error = "err";
  } else {
    checkbox.dataset.error = "valid";
  }
};

// END VALIDATION METHODS

// ACTUAL CODE NOW

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validfirstName(firstName);
  validLastName(lastName);
  validEmail(email);
  queryTypeSelected(queryType);
  validMessage(textarea);
  checkboxChecked(checkbox);

  firstNameValue = capitalize(firstNameValue);
  lastNameValue = capitalize(lastNameValue);
  if (document.querySelector(`[data-error='err`)) {
  }
});
// bring error message topMargin to the same
