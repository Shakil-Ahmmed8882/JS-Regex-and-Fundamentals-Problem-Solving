// //=====================>
// //EMAIL VALIDATION
const formParent = document.querySelector("#parent");
const overlay = document.getElementById("overlay");
const p = overlay.querySelector("#overlay > p");
const clear = document.getElementById("clear");

// Regex pattern to match input value
const regex =
  /^(?!.*[-.]{2})[a-zA-Z0-9]+[-._]?[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,6}$/gm;

//overlay bgcolor to indicate successfully done or not
const Success = "rgba(2, 71, 10, 0.636)";
const Failed = " rgba(122, 4, 4, 0.636)";

// function will be executed when call to action
function validate() {
  //user prompt
  const mail = document.querySelector("#email").value;

  // condition checking if true or false
  if (regex.test(mail)) {
    overlayStyle(Success, "Valid Email:", "green");
  } else {
    overlayStyle(Failed, "Invalid Email!", "red");
  }
}

function overlayStyle(bgColor, text, pColor) {
  overlay.classList.add("overlay");
  overlay.style.backgroundColor = bgColor;

  //display the overlay with its text
  overlay.style.display = "flex";
  p.textContent = text;
  p.style.cssText += "block";
  p.style.cssText += `color:#fff; background-color:${pColor}`;

  clear.addEventListener("click", function () {
    overlay.style.display = "none";
  });
}

//=====================>
//PASSWORD VALIDATION

function passwordValidate() {
  const password = document.querySelector("#password").value;
  const regexP = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/g;
  const isValid = regexP.test(password);

  if (isValid) {
    overlayStyle(Success, "Correct Password.", "green");
  } else {
    overlayStyle(Failed, "Invalid Password!", "red");
  }
}

//=====================>
//PHONE NO. VALIDATON

function numberValidate() {
  const phone = document.getElementById("phone").value;

  const regex = /^(\d{3})-(\d{3})-(\d{4})$/;
  const isValid = regex.test(phone);

  // condition checking if true or false
  if (isValid) {
    overlayStyle(Success, "Valid Phone No.:", "green");
  } else {
    overlayStyle(Failed, "Invalid Phone No.", "red");
  }
}



